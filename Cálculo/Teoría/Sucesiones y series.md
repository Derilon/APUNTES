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

**Sucesiones recurrentes**
	- Cada término se define a partir del anterior. Ejemplos:
		* Sucesión aritmética: ${}a_{1};a_{n+1}=a_{n}+d{}$
		* Sucesión de Fibonacci: ${}a_{1}=a_{2}=1,a_{n+1}=a_{n}+a_{n-1}{}$

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