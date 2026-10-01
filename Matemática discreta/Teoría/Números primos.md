**Definiciones**
	- ${}p \in \mathbb{Z}_{2}{}$ es primo si sus únicos divisores en ${}\mathbb{Z}^{+}{}$ son 1 y él mismo
		* ${}prime(p)\Leftarrow \nexists d\in \mathbb{Z},1<d<p:d|p\equiv \forall d\in \mathbb{Z}:(d|p \Rightarrow(d=1\vee d=p)){}$
	- ${}n \in \mathbb{Z}_{2}{}$ es compuesto si no es primo. El 1 no es ni primo ni compuesto 

**Lema de euclides**
$$
\forall p,a,b\in Z^{+}:prime(p) \wedge p|ab \wedge p \nmid a \implies p|b
$$
**Teorema fundamental de la aritmética**
	- Todo entero mayor que 1 puede escribirse de manera única como producto de primos
		* Observaciones: La unicidad se entiende salvo la conmutatividad

**Existencia de infinitos números primos**
	1. Dado cualquier conjunto finito de primos, construir otro primo que no pertenezca al conjunto
	2. Dado cualquier primo, construir otro primo mayor que él

**Algoritmos para calcular números primos**
	- Para comprobar si un número n es primo, podriamos hacer lo siguiente:
$$
2\leq i\leq n\to \text{si n mod i = 0}\to \text{n no es primo}
$$
	- Por el TFA, para comprobar si n es prino
		* Solo hay que comprobar los divisores primos menores o iguales que ${}|\sqrt{n}|{}$
		* Para números grandes, requiere muchas menos divisiones, lo que lo hace más eficiente
		* Exige almacenar los primos encontrados hasta el momento
	