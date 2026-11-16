**Teorema de la división en ${}\mathbb{N}{}$**

$$
\forall a,b \in \mathbb{N} \ con \ b>0 \exists c,r\in \mathbb{N}|a=bc+r \ y \ r<b
$$
**Demostración mediante inducción fuerte sobre a**
	- Nota: Demostraciones no requeridas en examen
	- Caso base: ${}a\leq b{}$
		* Si a<b, el teorema se satusface tomando c=0 y r=a
		* su a = b, el teorema se satisface tomando c =1 y r= 0
	- Paso inductivo: a>b>0; l=a-b, ya que ${}a-b\in \mathbb{N}\text{ y ademas }a-b<a {}$
		* Hip. Ind ${}\forall l \in \mathbb{N}, l<a, \exists c',r'\in \mathbb{N}|l=b*c'+r', \text{para }a\in \mathbb{N}, a>b\text{ arbitrario}{}$
		* Conclusión de inducción ${}\exists c,r \in \mathbb{N}|a=bc+r \ y\ r<b{}$
		* Derivación
$$
\begin{aligned}
l &= a-b, \qquad l<a \\
l &= bc' + r', \qquad r'<b \quad \text{(hip. inductiva)} \\
a &= l + b \\
  &= (bc' + r') + b \\
  &= b(c' + 1) + r'
\end{aligned}
$$

**Teorema de la división en ${}\mathbb{Z}{}$**

$$
\forall a,b\in \mathbb{Z} \ con \ b>0, \exists!c,r\in \mathbb{Z},\text{con }0\leq r<b,|a=b*c+r
$$
**Máximo común divisor**
	- mcd(a,b)
		* Es un entero 
		* que es divisor común de a y b
		* y es divisible por cualquier otro divisor común de a y b 
$$
\forall a,b,d\in \mathbb{Z},d=mcd(a,b)\Leftrightarrow
\begin{cases}
d\geq 0 \\
{d}|{a} \\
d|b \\
\forall c\in \mathbb{Z}(c|a\wedge c|b) \implies c|d

\end{cases}
$$

**Lema de Euclides para el MCD**
$$
\forall a,b\in \mathbb{Z}, \text{uno no cero: si existe mcd}(a,b)\implies mcd(a,\mod b)
$$

**Teorema de Euclides para el MCD**
$$
\forall a,b\in \mathbb{Z}\text{ con al menos uno de ellos no nulo: mcd existe y es único}
$$

**Algoritmo de Euclides para el MCD**
$$
\begin{array}{l}
\text{Entrada: } a,b\in\mathbb{Z},\ \text{no ambos cero} \\[1mm]
\text{Salida: } \operatorname{mcd}(a,b) \\[2mm]
\hline
\\
\text{Mientras } b\neq 0 \text{ hacer} \\
\quad r \leftarrow a \bmod b \\
\quad a \leftarrow b \\
\quad b \leftarrow r \\
\text{Fin Mientras} \\[2mm]
\text{Devolver } |a|
\end{array}
$$

**Mínimo común múltiplo**
	- El mcm(a,b) es un entero positivo que es múltiplo común de a y b tal que cualquier otro múltiplo de a y b es múltiplo de él 

**Teorema de Bézout**
$$\forall a,b\in \mathbb{Z}\text{, con al menos uno de ellos no nulo, }, \exists m,n\in \mathbb{Z}:mcd(a,b)=ma+nb$$