"use strict";

/*
 * Bullet Depth Markers
 *
 * Keeps unordered list markers in sync with nesting depth: depth 1 uses `-`,
 * depth 2 uses `*`, depth 3 uses `+`, then the sequence repeats.
 *
 * Layout (see DESIGN.md):
 *   §1  marker arithmetic          pure
 *   §2  document scanning          pure
 *   §3  rewrite planning           pure
 *   §4  CodeMirror wiring          Obsidian-aware
 *
 * §1-§3 take strings and numbers and never touch Obsidian or CodeMirror, so the
 * whole core runs under plain node for the test suite in tests/logic.test.js.
 */

// Only resolvable inside Obsidian. Under node these throw and the pure core
// below still loads, which is what makes the tests runnable.
let obsidian = null;
let cmState = null;
try { obsidian = require("obsidian"); } catch (_) { /* running under node */ }
try { cmState = require("@codemirror/state"); } catch (_) { /* running under node */ }

// ---------------------------------------------------------------- §1 markers

const DEFAULT_MARKERS = ["-", "*", "+"];

/** The only characters CommonMark accepts as unordered list markers. */
const LEGAL_MARKERS = ["-", "*", "+"];

/** Marker for a 1-based nesting depth, cycling through `markers`. */
function markerForDepth(depth, markers) {
  return markers[(depth - 1) % markers.length];
}

// --------------------------------------------------------------- §2 scanning

const RE_BLANK = /^[ \t]*$/;
const RE_UL = /^([ \t]*)([-*+])([ \t]+|$)/;
const RE_OL = /^([ \t]*)(\d{1,9})([.)])([ \t]+|$)/;
// `---`, `***`, `___` and spaced forms like `- - -` are thematic breaks, not
// list items. Without this, `- - -` would parse as a bullet and get rewritten.
const RE_HR = /^[ \t]*((\*[ \t]*){3,}|(-[ \t]*){3,}|(_[ \t]*){3,})$/;
const RE_FENCE = /^[ \t]*(`{3,}|~{3,})/;

/** Split text into lines carrying their absolute offsets. */
function splitLines(text) {
  const lines = [];
  let start = 0;
  for (let i = 0; i <= text.length; i++) {
    if (i === text.length || text[i] === "\n") {
      lines.push({ start, end: i, text: text.slice(start, i) });
      start = i + 1;
    }
  }
  return lines;
}

/** Visual column of a leading-whitespace run, expanding tabs to tab stops. */
function indentColumn(ws, tabSize) {
  let col = 0;
  for (const ch of ws) {
    col = ch === "\t" ? col + tabSize - (col % tabSize) : col + 1;
  }
  return col;
}

/**
 * Lines that must never be rewritten: YAML frontmatter and fenced code blocks.
 *
 * This scans from the start of the document rather than from the edited region,
 * because a fence opened far above is invisible to a local scan — and bullets
 * inside a code block would otherwise be "corrected".
 */
function computeSkip(lines) {
  const skip = new Array(lines.length).fill(false);
  let i = 0;

  if (lines.length && lines[0].text.trim() === "---") {
    let j = 1;
    while (j < lines.length && lines[j].text.trim() !== "---") j++;
    if (j < lines.length) {
      for (let k = 0; k <= j; k++) skip[k] = true;
      i = j + 1;
    }
  }

  let fenceChar = null;
  for (; i < lines.length; i++) {
    const m = RE_FENCE.exec(lines[i].text);
    if (fenceChar === null) {
      if (m) {
        fenceChar = m[1][0];
        skip[i] = true;
      }
    } else {
      skip[i] = true;
      if (m && m[1][0] === fenceChar) fenceChar = null;
    }
  }
  return skip;
}

/**
 * Classify a line as a bullet, an ordered item, a blank, a continuation of the
 * previous item, or something that ends the list block entirely.
 */
function classify(rawText) {
  // Files from disk and pasted text can carry \r. Left in place, a bare "\r"
  // line fails every pattern below and would be read as a block-ending
  // paragraph, silently splitting loose lists.
  const text =
    rawText.charCodeAt(rawText.length - 1) === 13 ? rawText.slice(0, -1) : rawText;

  if (RE_BLANK.test(text)) return { kind: "blank" };
  if (RE_HR.test(text)) return { kind: "other" };

  const ul = RE_UL.exec(text);
  if (ul) return { kind: "ul", indent: ul[1], markerOffset: ul[1].length, marker: ul[2] };

  const ol = RE_OL.exec(text);
  if (ol) return { kind: "ol", indent: ol[1] };

  if (/^[ \t]/.test(text)) return { kind: "cont", indent: /^[ \t]*/.exec(text)[0] };
  return { kind: "other" };
}

/** Index of the line containing an absolute offset. */
function lineIndexAt(lines, offset) {
  let lo = 0;
  let hi = lines.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (offset > lines[mid].end) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

// --------------------------------------------------------------- §3 planning

/**
 * Assign depths across one contiguous list block and emit marker corrections.
 *
 * Depth comes from a stack of indent columns rather than dividing whitespace by
 * a tab width, so mixed indentation (a 2-space level inside a 4-space level,
 * common in pasted content) still yields stable, correct depths.
 */
function emitBlock(lines, info, from, to, tabSize, markers, out) {
  const stack = [];
  for (let i = from; i <= to; i++) {
    const inf = info[i];
    if (inf.kind !== "ul" && inf.kind !== "ol") continue;

    const col = indentColumn(inf.indent, tabSize);
    while (stack.length && stack[stack.length - 1] >= col) stack.pop();
    stack.push(col);

    if (inf.kind !== "ul") continue; // ordered items hold a level but keep their numbering

    const want = markerForDepth(stack.length, markers);
    if (inf.marker !== want) {
      const pos = lines[i].start + inf.markerOffset;
      out.push({ from: pos, to: pos + 1, insert: want });
    }
  }
}

/**
 * Plan the marker corrections needed for the list blocks touching [from, to].
 *
 * Returns single-character replacements, so every edit is length-neutral and
 * cursor positions cannot drift. Returns [] when everything already matches,
 * which is what stops the transaction filter from recursing.
 */
function planRewrites(text, from, to, tabSize, markers) {
  if (!markers || !markers.length) return [];

  const lines = splitLines(text);
  const skip = computeSkip(lines);
  const info = lines.map((l, i) => (skip[i] ? { kind: "other" } : classify(l.text)));

  // Grow the edited range out to whole list blocks, so depths are computed from
  // the real start of the list rather than from wherever the cursor happened to be.
  let start = lineIndexAt(lines, from);
  let end = lineIndexAt(lines, to);
  while (start > 0 && info[start - 1].kind !== "other") start--;
  while (end < lines.length - 1 && info[end + 1].kind !== "other") end++;

  const out = [];
  let i = start;
  while (i <= end) {
    if (info[i].kind === "other") { i++; continue; }
    let j = i;
    while (j + 1 <= end && info[j + 1].kind !== "other") j++;
    emitBlock(lines, info, i, j, tabSize, markers, out);
    i = j + 1;
  }
  return out;
}

/** Apply planned changes to text. Used by the tests; the editor applies its own. */
function applyRewrites(text, changes) {
  if (!changes.length) return text;
  const sorted = changes.slice().sort((a, b) => a.from - b.from);
  let out = "";
  let pos = 0;
  for (const c of sorted) {
    out += text.slice(pos, c.from) + c.insert;
    pos = c.to;
  }
  return out + text.slice(pos);
}

// --------------------------------------------------------------- §4 settings

/**
 * Parse the marker-sequence setting.
 *
 * Only `-`, `*` and `+` are accepted: any other character would stop the line
 * from parsing as a list item at all, which would corrupt notes rather than
 * restyle them.
 */
function parseMarkerSetting(raw) {
  const parts = String(raw == null ? "" : raw).split(/[\s,]+/).filter(Boolean);

  if (!parts.length) {
    return { ok: false, error: "Enter at least one marker: -, * or +" };
  }
  for (const p of parts) {
    if (p.length !== 1 || LEGAL_MARKERS.indexOf(p) === -1) {
      return { ok: false, error: '"' + p + '" is not a list marker. Markdown allows only -, * and +' };
    }
  }
  if (new Set(parts).size !== parts.length) {
    return { ok: false, error: "Each marker may appear only once" };
  }
  return { ok: true, markers: parts };
}

// ------------------------------------------------------- §4 Obsidian wiring

const Plugin = obsidian ? obsidian.Plugin : class {};
const PluginSettingTab = obsidian ? obsidian.PluginSettingTab : class {};

class BulletDepthMarkers extends Plugin {
  async onload() {
    const saved = (await this.loadData()) || {};
    const parsed = parseMarkerSetting((saved.markers || DEFAULT_MARKERS).join(" "));
    this.settings = { markers: parsed.ok ? parsed.markers : DEFAULT_MARKERS.slice() };

    if (cmState) this.registerEditorExtension(this.buildFilter());
    this.addSettingTab(new BulletDepthSettingTab(this.app, this));
  }

  /**
   * Append marker corrections to the transaction that caused them, rather than
   * dispatching a second one. `sequential: true` keeps the fix in the same
   * dispatch as the keystroke, so undo treats "indent and fix marker" as one step.
   *
   * Re-entry is safe: planRewrites returns [] for an already-correct document,
   * so a second pass over our own output is a no-op and terminates.
   */
  buildFilter() {
    const plugin = this;
    return cmState.EditorState.transactionFilter.of((tr) => {
      if (!tr.docChanged) return tr;

      // Loading a note fills an empty editor in one transaction covering the
      // whole document. Treating that as an edit would rewrite every marker in
      // the file on open and mark it dirty — existing notes are meant to be
      // reconciled only when actually edited.
      if (tr.startState.doc.length === 0) return tr;

      let from = Infinity;
      let to = -1;
      tr.changes.iterChangedRanges((_fromA, _toA, fromB, toB) => {
        from = Math.min(from, fromB);
        to = Math.max(to, toB);
      });
      if (to < 0) return tr;

      const text = tr.newDoc.toString();
      // startState, not state: `tr.state` builds the post-transaction state,
      // which does not exist yet while a transactionFilter is running.
      const tabSize = tr.startState.tabSize || 4;
      const changes = planRewrites(text, from, to, tabSize, plugin.settings.markers);
      return changes.length ? [tr, { changes, sequential: true }] : tr;
    });
  }
}

class BulletDepthSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    // Visibility toggles a class rather than setting element.style, which
    // Obsidian's plugin guidelines disallow.
    const error = containerEl.createDiv({ cls: "bdm-setting-error" });

    new obsidian.Setting(containerEl)
      .setName("Marker sequence")
      .setDesc("Markers cycled by nesting depth. Markdown allows only -, * and +.")
      .addText((text) =>
        text
          .setPlaceholder("- * +")
          .setValue(this.plugin.settings.markers.join(" "))
          .onChange(async (value) => {
            const result = parseMarkerSetting(value);
            if (!result.ok) {
              error.setText(result.error);
              error.toggleClass("is-visible", true);
              return; // keep the previous valid sequence
            }
            error.toggleClass("is-visible", false);
            this.plugin.settings.markers = result.markers;
            await this.plugin.saveData(this.plugin.settings);
          })
      );
  }
}

module.exports = BulletDepthMarkers;
module.exports.__test__ = {
  DEFAULT_MARKERS,
  markerForDepth,
  planRewrites,
  applyRewrites,
  parseMarkerSetting,
};

/* nosourcemap */