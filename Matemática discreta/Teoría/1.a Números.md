**Números naturales, construcción estándar**
	- Los números naturales pueden construirse:
		- Mediante la aplicación repetida de la función sucesor (suma1)
		- Al elemento inicial, 0
		- Denotamos n aplicaciones de la función sucesor mediante ${}S^{n}{}$
	- N es un conjunto con las siguientes propiedade:
		1.  N es un elemento constante que denotaremos por 0
		2. La función S sobre N existe y asigna un valor con las siguientes propiedades:
			1. N es cerrado bajo s ${\to \forall n,m \in \mathbb{N}:s(n)=s(m) \Rightarrow n=m} {}$
			2. Dos elementos de ${}\mathbb{N}{}$ con el mismo sucesor son iguales
			3. 0 no es sucesor de ningún elemento de ${}\mathbb{N}{}$ 
			4. Todo elemento de N puede obtenerse aplicando la funcion S a 0. Si un subconjunto de N conbtiene a 0 y el sucesor de todos sus elementos, entonces es igual a N
			5. ${}\forall A \subseteq \mathbb{N}:(0\in A \wedge(\forall n\in A:S(n)\in A))\implies A=N{}$
			6. PBO: todos los subconjuntos tienen un elemento mínimo
	- Podemos definir la adición mediante una definición recursiva : 
‌	$$ \forall a\in \mathbb{N},a+0=a,\forall a,b\in \mathbb{N},a+S(b)=S(a+b)$$
**Números enteros** 
	- Una forma de definir los enteros es la "distancia" entre los naturales. Pares de números naturales. 3-1, etc.… Muchos pares dan un mismo número entero, por lo que hay que definir una relación de equivalencia, obteniendo la clase de todos los números equivalentes que hace que todos los números equivalentes sean los mismos.
	- En los naturales, hay ecuaciones que no existen al no haber inversos aditivos.  
	- Definición:
		- Se añade la función p (predecesor) s(p(n))=p(s(n)) - Dicho mal y pronto es restar 1
		- Quitamos el axioma 5 de Peano
		- Extendemos ${}(\mathbb{N},+,*) \ a \ (\mathbb{Z},+,*){}$
		- Se extiende la operación + conservanco la conmitividad 
		- Se extiende la operación * conservando la conmutatividad 
	- Todo elemento tiene su inverso aditivo. O es su propio inverso aditivo 
	- Propiedades:
		- Cerrados respecto de la suma y de la resta  
		- ${}\mathbb{Z}{}$- son los que pueden obtenerse sin la función sucesor, por lo que ${}\mathbb{Z}=\mathbb{N}+\mathbb{Z}-{}$
		- ${}\mathbb{Z}{}$ con el orden natural no satisface el PBO 
		- ${}\mathbb{Z}_{m}{}$son los positivos, el segmento de positivos creo

**Números racionales**
	- Se construyen como un par de números, también existe una relación de equivalencia en la que los equivalentes son uno solo. Se construyen a partir de los enteros como denominador y numerador. Tiene inverso para el producto.
	- Equivalencia de valor ${}\frac{2}{4}=\frac{1}{2}{}$
	- La representación canónica es el que tiene el mínimo valor del numerador y denominador (siempre positivo)
	- Se extiende la adición 
	- Se extiende la multiplicación
	- Se extiende la relación de orden natural
	- Propiedades importantes:
		- Representación decimal finita o periódica
		- Densos respecto a sí mismos y respecto a la relación de orden natural
	- Tienen la misma cardinalidad que los naturales

**Números reales**
	- Tenemos algoritmos para calcular aproximaciones de cualquier precisión a números com ${}\sqrt{ 2 }{}$, es decir, tenemos secuencias de racionales que se acercan cada vez más al resultado, pero no se puede usar este como límite porque no se puede usar A para definir A.
	- Se deben definir las secuencias adeciadas sin hablar del límite
	- Secuencias de Cauchy:
		- Una secuencia tal que para cualquier distancia A, siempre se puede encontrar un término de la secuencia tal que, posterior a él, la distancia entre dos términos cualesquiera es menor que A.
		- Cada secuencia de Cauchy de números racionales representa un número real, pero la representación no es única. Dos secuencias de Cauchy representan el mismo número real cuando la diferencia entre el termino n de cada una se acerca a 0. Existe una clase de equivalencia de todas las secuencias de Cauchy, ese es el número real. Para hacer el número real o bien lo defines como axiomas o como una secuencia de racionales. En informática no hay reales, hay aproximaciones a los reales usando racionales
		- Por construcción, los números reales son completos.

<b>Números complejos</b>
	- Decimos que (a, 0) es el número real a. La segunda cifra es el múltiplo de ${}\sqrt{ -1 }{}$ 
	- No existe relación de orden, ya que ahora se da en dos dimensiones 
	- Teorema fundamental del álgebra: los números complejso permiten verificar que todos los polimomios de grado n tienen n raíces
	- ${}(0,1)*(0,1)=(1,0){}$
	




