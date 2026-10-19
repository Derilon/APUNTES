**Suma y resta**
‌	-${}(a+bi)+(c+di)=(a+c)+(b+di){}$ 
	- Propiedades
		* Asociativa
		* ${}\exists{}$ elemento neutro 
		* Conmutativa
		* ${}\exists{}$ elemento opuesto: -z

**Producto**
	- ${}(a+bi)(c+di)=ac*bdi^{2}+adi+bci=ac-bd+(ad+bc)i{}$
	- Propiedades
		* Asociativa
		* Tiene neutro: 1
		* Conmutativa
		* Tiene inverso (salvo 0)
		* Es distributivo respecto a la suma

**División**
$$
\frac{z_{1}}{z_{2}}=\frac{z_{1}\overline{z_{2}}}{z_{2}\overline{z_{2}}}=\frac{a+bi}{c+di}=\frac{(a+bi)(c-di)}{(c+di)(c-di)}
$$

**Inverso**
$$
Si \ z=a+bi\neq 0  \Leftrightarrow (a+b)^{-1}=\frac{1}{(a+bi)}=\frac{a+bi}{a^{2}+b^{2}}
$$

**Conjugado**
‌	${}\overline{z}=\overline{a+bi}=a-bi{}$
	- Propiedades
‌	‌	${}\overline{z}=z\Leftrightarrow \mathrm{Im}(z)=0\Leftrightarrow z\in \mathbb{R}{}$
‌		${}\overline{z_{1}+z_{2}}=\overline{z_{1}}+\overline{z_{2}}{}$
‌		${}\overline{-z}=-\overline{z}{}$

**Módulo y argumento**
	- Módulo: distancia de z a 0 ${}\to \left| z \right|=\left| a+bi \right|=\sqrt{ a^²+b^² }{}$
	- Argumento: ${}Arg(z)=\theta{}$ es el ángulo que forma la semirrecta que une 0 con z con la semirrecta y=0
$$
‌	  \begin{cases} 
\theta=Arg(a+bi)=\arctan\left( \frac{b}{a} \right)& \text{Primer cuadrante}\\
\theta=Arg(a+bi)=\arctan \left( \frac{b}{a} \right)& \text{Segundo y tercer cuadrante}\\
\theta=Arg(a+bi)=\arctan\left( \frac{b}{a} \right)&\text{Cuarto cuadrante}

\end{cases}
	  $$

**Representación de números complejos**
	- ${}\sqrt{ -1 }=i{}$
	- Forma binómica: z=a+bi
		- a es la parte real de z = Re(z)
		- b es la parte imaginaria de z = Im(z)
	- A partir de su módulo ${}(\rho){}$ y su argumento ${}(\theta){}$ 
		- Forma trigonométrica: ${}z=\rho(\cos \theta+isen\theta){}$
		- Forma polar: ${}z=\rho_{\theta}{}$
		- Forma exponencial: ${}z=\rho e^{i\theta}{}$
	- Si conocemos su módulo y su argumento, cómo obtener la forma binómica
$$
\begin{cases}
\cos(\theta)=\frac{a}{\rho} &a=\rho \cos \theta=\mathrm{Re}(z) \\
\sin(\theta)=\frac{b}{\rho} &b=\rho \sin \theta=\mathrm{Im}(z)
\end{cases}
$$
	- Multiplicación en forma trigonométrica
$$
\begin{array}{}
Si \ z=\rho(\cos \theta+\sin i\theta),z'=\rho'(\cos \theta'+\sin i\theta')\Rightarrow \\
z*z'=\rho(\cos \theta+\sin i\theta)*\rho'(\cos \theta'+\sin i\theta')= \\
\rho \rho'[\cos(\theta+ \theta')+\sin(\theta+\theta')i] \\ \\

\to \left| z*z' \right|=\left| z \right|\left| z' \right| \\
\to Arg(z'z)=Arg(z)+Arg(z')


\end{array}
$$
	- Multiplicación en forma polar 
$$
\rho_{\theta}\rho'_{\theta'}=(\rho \rho')_{\theta+\theta'}

$$
	- Multiplicación en forma exponencial
$$
\rho e^{i\theta}\rho'e^{i\theta'}=(\rho \rho')e^{i(\theta+\theta')}

$$
	- División: se dividen los módulos y se restan los argumentos

**Propiedades del conjugado y del módulo**
$$
\begin{gather}
\left| z_{1}*z_{2} \right|=\left| z_{1} \right|*\left| z_{2} \right|\\
\left|z^{-1}  \right|=\left| z \right|^{-1}\\
\mathrm{Re}(z)=\frac{z+\overline{z}}{2}\\
\mathrm{Im}(z)=\frac{z-\overline{z}}{2i}\\
\left| z^{2} \right|=z*\overline{z}\\
\left| z_{1}*z_{2} \right|=\left| z_{1} \right|*\left| z_{2} \right|\\
Si \ z_{2} \neq 0,\left| \frac{z_{1}}{z_{2}} \right|=\frac{\left| z_{1} \right|}{\left| z_{2} \right|}
\end{gather}
$$

**Ángulos que conviene conocer**

$$
 \begin{array}{l}
 \to \frac{\pi}{6}:\sin=\frac{1}{2}, \cos=\frac{\sqrt{ 3 }}{2}\Rightarrow 1_{\frac{\pi}{6}}=\frac{\sqrt{ 3 }}{2}+\frac{1}{2}i  & 30º\\
 \to \frac{\pi}{4}:\sin=\frac{\sqrt{ 2 }}{2}, \cos=\frac{\sqrt{ 2 }}{2} \Rightarrow 1_{\frac{\pi}{4}}=\frac{\sqrt{ 2 }}{2}+\frac{\sqrt{ 2 }}{2}i  & 45º\\ 
 \to \frac{\pi}{3}: \sin=\frac{\sqrt{ 3 }}{2}, \cos= \frac{1}{2} \Rightarrow 1_{\frac{\pi}{3}}=\frac{1}{2}
+ \frac{\sqrt{ 3 }}{2}i & 
 60º
 \end{array}
$$

**Polinomios**
	- Al igua que en ${}\mathbb{R}{}$ dado un polinomio ${}P(z){}$ con coeficioentes complejos y ${}\alpha \in \mathbb{C}{}$, tenemos que:
		- Un polinomio en ${}\mathbb{R}{}$ es una expresión
‌	‌		${}a_{n}x^{n}+a_{n-1}x^{n-1}+\dots+a_{1}x+a_{o}\text{ con }a;\in \mathbb{R}\forall\{0\leq i\leq n\}{}$
	- Teorem=a fundamental del álgebra: un polinomio de grado ${}n\geq 1{}$ con coeficientes en ${}\mathbb{C}{}$ tiene exáctamente n raíces (contando multiplicidad)
	
**Exponentes - Fórmula de De Moivre**
	- Se eleva el módulo y se multiplica el argumento:‌	‌	‌	‌$$	  \begin{gather}
‌	‌	‌	\text{Sea } z=\rho(cos\theta+isen\theta )\\
‌	‌	‌	z^{n}=\rho^{n}(\cos (n\theta)+ i sen(n\theta))
‌	‌	‌	\end{gather}
‌	$$
**Raíces de números complejos**
	- Dado ${}z \in \mathbb{C}{}$ decimos que ${}w \in \mathbb{C}{}$ es una raíz n-ésima de z
		* Todo número complejo ${}z=\rho(\cos \theta+\sin\theta){}$ distinto de 0 tiene exáctamente n raíces n-esimas, dadas por: 
 $$
\begin{gather}
 z=\rho(\cos \theta+i\sin \theta)=w^{n} \\
 |w|=\sqrt[n]{\rho}\\
 arg(w)=\frac{\theta+2k\pi}{n}\to k\in [0,n-1],k\in \mathbb{N}
 \end{gather}
	  $$
	  