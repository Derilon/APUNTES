‌	ls-  Definición: Sucesión: ${}f:\mathbb{N}\to \mathbb{R};f(n)=:a_{n}{}$ es el término n-ésimo de la sucesión. Las sucesiones tienen un orden, un valor asignado a cada término. 
- Notación: ${}(a_{n})^\infty_{n=1},\{a_n\}_{n\in \mathbb{N}}{}$

**Límites de sucesiones**
	- Una sucesión converge a un número l si se le acerca infinitamente. La cola de una sucesión es todos los términos que se aproximan en cierto entorno. Con la cola se ve la convergencia de una sucesión 
$$
‌	  \{a_n\}_{n\in\mathbb{N}}\to l\in \mathbb{R} \ si \ \forall \epsilon>0 \exists n_{0}\in \mathbb{N}|\forall n \geq n_{0},a_{n}\in(l-\epsilon,l+\epsilon)
	  $$
	- Notación ${}\{a_{n}\}_{n\in \mathbb{N}}\to l\vee\lim_{ n \to \infty } a_{n}=l{}$
	- El límite, si existe, es único. No puede haber dos cotas que contengan el límite
	- Toda sucesión convergente está acotada

**Álgebra de límites**
	- Binomio de Newton
$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$
	- Lema del sandwich
$$
a_{n}\leq b_{n}\leq c_{n}\forall n\in \mathbb{N};\lim_{\ n}a_{n}=\lim_{ n }c_{n}=a  
$$
		- Un buen ejemplo es el límite del coseno de n entre n si n ${}\to \infty{}$

**Suciesiones monótonas**
	- Si tengo una sucesión creciente y acotada superiormente ${}\implies{}$ tiene límite
	- Una sucesión decreciente y acotada inferiormente ${}\implies{}$ tiene límite
		* El límite es el supremo del conjunto ${}\{a_{n}|n \in \mathbb{N}\}{}$ (Ánalogo con decreciente, acotada inferiormente)
	- Monóntona: o bien creciente o bien decreciente
	- Nota: hay que comprobar si las sucesiones son decrecientes o crecientes y si estan acotadas superiormente. Ejemplo sucesión que da el número ${}e \to \left( 1+\frac{1}{n} \right)^{n}:\lim_{ n \to \infty }\left( 1+\frac{1}{n} \right)^{n}=e{}$ 
	- Teorema de Bolzano-Wierstrass: Toda sucesión acotada tiene uan subsucesión convergente

**Sucesiones de Cauchy**
	- Definición: Una sucesión ${}a_{n}{}$ es de Cauchy si ${}\forall \epsilon > 0 \exists n_{0}\in \mathbb{N}|\forall n, m\geq n_{0}, \left| a_{n}-a_{m} \right|<\epsilon{}$
	- Sus términos se acercan entre sí sin mencionar ningún límite
	- Cualquier sucesión convergente es de Cauchy
	- Teorema de completitud en ${}\mathbb{R}{}$. Toda sucesión de Cauchy de números reales es convergente. 

**Sucesiones recurrentes**
	- Cada término se define a partir del anterior. Ejemplos:
		* Sucesión aritmética: ${}a_{1};a_{n+1}=a_{n}+d{}$
		* Sucesión de Fibonacci: ${}a_{1}=a_{2}=1,a_{n+1}=a_{n}+a_{n-1}{}$

**Sucesiones de vectores**
	- Una sucesión de vectores es una sucesión ${}(a_{n})_{n}{}$ donde cada término es un elemento de ${}\mathbb{R}^{n}{}$
	- Convergencia: ${}(a_{n})\to L\text{ si }||a_{n}-L|| \to 0\text{ cuando }n\to \infty{}$

**Subsucesiones**
	- Sucesión que se obtiene de otra seleccionando términos sin cambiar el orden
	- Si ${}(a_{n})\to l{}$, entonces toda subsucesión de ${}(a_{n}){}$ converge a ${}l{}$
	- Teorema de Bolzano-Wierstrass: Toda sucesión acotada tiene una subsucesión convergente

**Series**
	- Una serie es una suma infinita de números ${}a_{1}+a_{2}+a_{3}+a_{4}+\dots+a_{n}+\dots: a_{n}\in \mathbb{R}\forall n\in \mathbb{N}=\sum_{n=1}^{\infty}a_{n}{}$
	- Sucesión de términos de la serie: ${}(a_{n})^{\infty}_{n=1}{}$
	- Una serie converge si existe el límite de las sumas parciales
$$
\sum_{n=1}^{\infty}a_{n}=\lim_{ N \to \infty } S_{N}, \quad S_{N}:=\sum_{n=1}^{\infty}a_{n}
$$
	- Una serie diverge si no existe el límite de las simas parciales
	- Si ${}\sum a_{n}{}$ converge, entonces ${}\lim_{ n }a_{n}=0$
		* Nota: si la sucesión ${}a_{n}{}$ no converge a 0, la serie no converge
	- Fórmula a recordar: 
$$
\sum ^{N}_{n=1}r^{N}=\frac{r^{N}r-r}{r-1}=\frac{r^{N+1}-r}{r-1}
$$
	- Si r es positivo y ${}r<1\to{}$ converge
	- Si ${}r>1 \to{}$ no converge

**Series geométricas**$$
\sum_{n=1}^{\infty}ar^{n}
	$$
	- Propiedades, siendo ${}\sum a_{n},\sum b_{n}{}$ convergentes, ${}\lambda \in \mathbb{R} {}$
		* ${}\sum(a_{n}+b_{n})=\sum a_{n}\sum b_{n}{}$
		* ${}\sum\lambda a=\lambda \sum a{}$

**Series armónicas**
	- Serie armónica: ${}1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}\dots=\sum{\infty}_{n=1} \frac{1}{n}{}$
	- Diverge: Se comprieba que ${}S_{2^{m}}>1+m \frac{1}{n}{}$ por tanto la sucesión de sumas parciales no vonberge
	- Generalización de la serie armónica
$$
\sum ^{\infty}_{n=1} \frac{1}{n^{p}}=
\begin{cases}
\infty & si\quad 0\leq p\leq 1 \\
\text{converge  } & si\quad p>1 
\end{cases}$$

**Series telescópicas**
	- Un método que se basa en hallar sumas parciales que se cancelen descomponiendo una fracción 
		* Ej: ${}\sum \frac{1}{n(n+1)}=\sum \frac{A}{n}+\frac{B}{n+1}\to{}$ Las sumas parciales se cancelan así que da el primer término más el último

**Series absolutamente convergente**
	- ${}\sum \left| a_{n} \right|<\infty\implies \sum a_{n}<\infty{}$
	- Definición:
		* ${}\sum a_{n}{}$ es absolutamente convergente si ${}\sum \left| a_{n} \right|<\infty{}$
		* ${}\sum a_{n}{}$ es condicionalmente convergente si ${}\sum a_{n} < \infty, \sum \left| a_{n} \right|=+\infty{}$
	- Criterio de Leibnitz: ${}a_{n}\geq 0\forall n,(a_{n})_{n}\text{ decreciente y }\lim_{ n}a_{n}=0 \implies\sum(-1)^{n}a_{n}{}$

**Criterios de convergencia**
	- Comparación por cociente: ${}\sum a_{n},\sum b_{n}{}$ sea ${}\lim\frac{a_{n}}{b_{n}}= c\in \mathbb{R}\cup \left\{ \infty \right\}{}$
		1. Si ${}c \in \mathbb{R}, c\neq 0 \implies{}$ entonces ${}\sum a_{n}<\infty \Leftrightarrow \sum b_{n}< \infty{}$
		2. Si ${}c=0{}$, y ${}\sum b_{n}{}$ convergue ${}\Rightarrow \sum a_{n}{}$ converge
		3. Si ${}c=0{}$, y ${}\sum a_{n}{}$ diverge${}\Rightarrow \sum b_{n}{}$ diverge
			+ Si ${}c=\infty{}$, se aplica lo anterior a ${}\lim\frac{a_{n}}{b_{n}}{}$
	- Criterio del cociente: ${}\sum a_{n}{}$ con ${}a_{n}>0\forall n;\lim_{ n }\frac{a_{n+1}}{a_{n}}=\alpha{}$
		1. Si ${}\alpha<1\implies \sum a_{n}< \infty{}$
		2. Si ${}\alpha>1 \implies \sum a_{n}=\infty{}$
		3. Si ${}\alpha=1{}$ puede pasar cualquier cosa
	- Criterio de la raíz: ${}\sum a_{n};\lim_{ n }\sqrt[n]{ \left| a_{n} \right| }=\rho{}$
		1. Si ${}0\leq \rho<1\implies \sum a_{n}<\infty{}$
		2. Si ${}\rho>1{}$ o ${}\rho=+\infty\implies \sum a_{n}=\infty{}$
		3. Si ${}\rho=1{}$ puede pasar cualquier cosa