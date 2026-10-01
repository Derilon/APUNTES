**Definición**
	- Una matriz real es un conjunto de números realies ordenados de cierta manera: Se llama matrix real de orden m${}*{}$n (m filas y n columnas) al conjunto de mn números reales dispuestos en filas y columnas.
	- Se representan por ${}A, (a_{ij}), (a_{ij})_{m*n}{}$
	- A los ${}a_{ij}{}$ los llamo coeficientes
	- Dos matrices A, B son iguales si tienen el mismo orden y los mismos coeficientes

**Algunas matrices con nombre**
	- Una matriz de orden ${}m*1{}$; matriz columna
	- Una matriz de orden ${}1*n{}$; matriz fila
	- Si ${}m=n{}$; matriz cuadrada
	- Si en una matriz cuadrada todos los elementos fuera de la diagonal principal son 0 ${}(a_{ij}=0 \ \forall i \neq j){}$, se llama matriz diagonal
	- ${}I_{n}{}$ denota la matriz diagonal ${}n*n{}$ en la que todos los elementos de la diagonal son 1. Se llama matriz unidad
	- Si en una matriz cuadrada todos los elementos por encima o por debajo de la diagonal son 0, decimos que es triangular. 
		* Triángular superior si ${}a_{ij}=0 \forall i>j{}$
		* Triángular inferior si ${}a_{ij}=0 \forall i<j{}$
	- Una matriz es escalonada si cumple:
		1. Todas las filas nulas están en la parte inferior
		2. El primer elemento no nulo de cada fila (contando desde abajo) está a la derecha del primer elemento no nulo de su fila superior.
		* Al primer elemento no nulo de cada fila lo llamamos elemento pivote 
	- Una matriz escalonada se llama reducida se llama reducida si todos los pivotes son 1
	- El conjunto de todas las matrices reales de orden ${}m*n{}$ se denota ${}m_{m*n}(\mathbb{R}){}$ 

**Suma**
	- Sea ${}A,B \in M_{m*n}(\mathbb{R}){}$, su suma es la suma de los coeficientes en su misma posición
	- No se pueden sumar matrices de distinto orden
	- Propiedades, dadas A, B y C
		* Asociativa
		* Existe elemento neutro: ${}(0)_{m_{n}}{}$
		* Existe elemento opuesto: ${}-(a_{ij})=(-a_{ij}){}$
		* Conmutativa

**Multiplicación por un escalar**
	- ${}\lambda(a_{ij})=(\lambda a_{ij}){}$
	- Propiedades:
		* ${}(\lambda \mu)A=\lambda A+\mu A{}$
		* ${}\lambda (A+B)=\lambda A+\lambda B{}$
		* Asociativa
		* ${}1*A=A{}$

**Multiplicación de matrices**
	- Sea ${}A \in M_{m*k}(\mathbb{R}),B \in M_{m*k}(\mathbb{R}){}$
	- Si ${}A=(a_{ij})_{m*k}\text{ y } B=(b_{ij})_{m*k}{}$
	- ${}A*B=(c_{ij})_{m*n}=c_{ij}=a_{i1}b_{1j}+a_{i_{2}}b_{2j}+\dots+a_{ik}b_{kj}{}$
	- Propiedades: 
		* Asociativa
		* Distributiva
		* NO es conmutativa
		* ${}\exists{}$ elemento neutro: ${}I_{n}{}$
		* ${}\lambda (A*B)=(\lambda A)B{}$

**Traspuesta de una matriz**
	- Notación: ${}(a_{ij})^{t}=A^{t}=(a_{ij})_{m*n}^{t}=(a_{ji})_{n*m}{}$
	- Propiedades:
		  * ${}(A^{t})^{t}=A{}$
		  * ${}(A+B)^{t}=A^{t}+B^{t}{}$
		  * ${}(\lambda A)^{t}=\lambda A^{t}{}$
		  * ${}(A*B)^{t}=B^{t}*A^{t}{}$
		  * Si ${}A=A^{t}{}$ decimos que A es simétrica: ${}a_{ij}=a_{ji}\forall ij{}$

**Inversa de una matriz**-1
	- ${}A^{-1}{}$ es la inversa de A si ${}A*A^{-1}=I=A^{-1}*A{}$
	- En particular, A y su inversa son cuadradas
	- Propiedades
		* Si A tiene inversa, esta es única
		* ${}A^{-1}{}$ tiene inversa: A
		* Si A, B tiene inversa, ${}(A,B)^{-1}=B^{-1}A^{-1}{}$
		* ${}(AB)^{-1}(AB)=I{}$
		* Si A tiene inversa, ${}(A^{t})^{-1}=(A^{-1})^{t}{}$

**Álgebra de matrices**
