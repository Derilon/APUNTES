**Definiciones**
	- Una aplicación ${}f:\mathbb{R}\to \mathbb{R}{}$ se llama función real de variable real (${}f: \mathbb{R}^{n}\to \mathbb{R}{}$ es una función real de varias variables reales)
	- ${}f:\mathbb{R}^{n}\to \mathbb{R}^{m} {}$ es una función vectorial de varias variables reales
	- Imagen: ${}\mathrm{Im}(f)=\{y \in \mathbb{R}|\exists x\text{ con }f(x)=y\}{}$
	- Grafo: ${}Graf(f)=\{(x,f(x))|x \in Dom(f)\}{}$

**Teorema del cálculo de límites**
	- Definición: Sea ${}f:\mathbb{R}\to \mathbb{R}{}$ una función; sea ${}a \in \mathbb{R}|\exists r>0 \text{ con } (a-r,a+r)-\{a\}\subset Dom(f){}$
	- Decimos que ${}\lim_{ x \to a }f(x)=b \text{ si } \forall \epsilon>0\exists\delta>0|\text{ si }x \in(a-\delta, a+\delta)-\{a\}\text{, entonces }f(x)\in(b-\epsilon,b+\epsilon){}$ 
		* Si ${}\exists \lim_{ x \to a }f(x)\implies \exists!\lim_{ x \to a }f(x){}$
		* ${}f:\mathbb{R}\to \mathbb{R}, Dom(f)\supset(a-r,a+r) \text{ para algún } r>0 \implies\lim_{ x \to a}f(x)=b\Leftrightarrow{}$ para toda sucesión ${}x_{n}\to a_{n\to \infty}{}$, se tiene que ${}\lim_{ n \to \infty }f(x_{n})=b{}$
	- Teorema de cálculo de límites:${}f,g: \mathbb{R} \to \mathbb{R}, \exists \lim_{ x \to a }f(x)=b_{1}, \exists \lim_{ x \to a }g(x)=b_{2}{}$
		1. ${}\exists \lim_{ x \to a } (f+g)(x)=b_{1}+b_{2}{}$
		2. ${}\exists \lim_{ x \to a } (fg)(x)=b_{1}b_{2}{}$
		3. ${}\exists \lim_{ x \to a } (\lambda f)(x)=\lambda b_{1} (\lambda \in \mathbb{R}){}$
		4. ${}\text{Si: }b_{2} \neq 0, \exists \lim_{ x \to a }\left( f\text{/}g \right)(x)=b_{1}\text{/}b_{2}{}$

**Asíntotas**
	- ${}f{}$ tiene asíntota horizontal en ${}y=b{}$ si ${}\lim_{ x \to \infty }f(x)=b\vee \lim_{ x \to -\infty }f(x)=b{}$
	- ${}f{}$ tiene asíntota horizontal en ${}x=a{}$ si ${}\lim_{ x \to a^{+} }f(x)=\pm\infty \vee \lim_{ x \to a^{-} }f(x)=\pm\infty{}$
	- ${}f{}$ tiene asíntota oblicua en ${}y=ax+b{}$ si ${}\lim_{ x \to \infty }f(x)-(ax+b)=0 \vee\lim_{ x \to -\infty }f(x)-(ax+b)=0 {}$
		* ${}f(x){}$ tiene asíntota oblícua si y solo si ${}\lim_{ x \to \infty } \frac{f(x)}{x}=a{}$ y ${}\lim_{x \to \pm\infty} \left( f(x) - m x \right)=b{}$

**Continuidad**
	- ${}f:\mathbb{R}\to \mathbb{R}, a \in \mathbb{R}|\exists \delta>0\text{ con }(a-\delta, a+\delta)\subset Dom(f){}$
		* ${}f{}$ es continua en el punto ${}a{}$ si ${}\lim_{ x \to a }=b=f(a){}$
		* ${}f{}$ es continua si es continua en todos los puntos de su dominio
	- La composición de aplicaciones continuas es continua

