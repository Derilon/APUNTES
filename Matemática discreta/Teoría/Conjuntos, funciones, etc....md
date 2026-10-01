**Definición**
	- Una colección de objetos llamados elementos tal que se puede decidir si un objeto está o no en el conjunto está o no en el conjunto
		* Notación: ${}x \in S: \text{x es un elemento de S}{}$
	- No tienen un orden intrínseco
	- Axioma de extensionalidad: dos conjuntos son iguales si contienen los mismos elementos
		* ${}A = B \impliedby \forall x:x \in A \Leftrightarrow x \in B{}$
	- ${}A=B\Leftrightarrow (A \subseteq B \wedge B \subseteq A){}$
	- La relación ${}\subseteq{}$ es reflexiva y transitiva.
	- Axioma de separación: ${}B = \{ x \in A : P(x) \}{}$

**Familias de conjuntos**
	- Una familia de conjuntos es un conjunto cuyos elementos son todos conjuntos
	- Unión generalizada: ${} \cup F= \{x|\exists C\in F:\xi nC\}{}$
	- Intersección generalizada: ${}\cap F=\{x |\forall C\in F:x \in C\}{}$

**Conjunto potencia y particiones**
	- Dado un conjunto S, el conjunto potencia de S, p(S) es el conjunto de todos los subconjuntos de S, es decir, ${}p(S)=\{C|C\subseteq S\}{}$
	- El resultado es una familia de conjuntos
	- ${}|p(S)|=2^{|S|}\to{}$ Cada elemento solo tiene dos posiciones: dentro o fuera del conjunto
	- Dado un conjunto S, una familia de subconjuntos C de S, es decir, ${}C\subseteq p(S){}$ es una partición de S si
		* ${}\cup C=S{}$ (su unión es el conjunto S)
		* ${}\forall c \in C:c\neq \varnothing{}$
		* ${}\forall c_{1},c_{2}\in C:c_{1}\neq c_{2}\to c_{1}\cap c_{2}=\varnothing{}$

**Producto cartesiano**
	- Dados dos objetos a y b, podemos devinir el par ordenado (a,b) donde ${}(a,b)=(c.d) \text{ si y solo si }a=c \wedge b=d{}$
	- Dados dos conjuntos S, T, su producto cartesiano , denotado ${}S\times T{}$ se define de la siguiente forma ${}S\times T=\{(a.b)|a \in S \wedge b \in T\}{}$

**Identidades de conjuntos y álgebra de Boole**
	 - Para conjuntos A, B y S: ${}A\subseteq S\wedge B\subseteq S\implies A\cap B\subseteq S \wedge \backslash A \subseteq S{}$, es decir, ${}A,B \in p(S)\implies A\cup b, A\cap B, \backslash A \in p(S){}$