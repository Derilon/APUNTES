‌	**Sistemas combinacionales**
	- Para la misma entrada se produce la misma salida 
	- Dominio, E: conjunto discreto de valores que puede tomar la entrada
	- Codominio, S: conjunto discreto de valores que puede tomar la salida
	- La función ,${}f:E\to S{}$, que relaciona la entrada con la salida

**Especificación de alto nivel** 
	- Funciones expresadas en lenguaje de mayor nivel que binario
	- Se expresan en funciones, cronogramas o en tablas de verdad
		* Con las tablas de verdad tienes la misma información, a la hora de diseñar un sistema te da la misma información una cosa u otra.

**Especificación binaria**
	- En un sistema digital los valores se codifican en binario (la codificación no tiene por qué ser la misma en la entrada o la salida)
	- Se convierte la entrada en un vector de n bits donde debe cumplirse que ${}2^{n}\geq \left| E \right|{}$
	- Para obtener uina especificación binaria desde una de alto nivel:
		1. Elegir una codificación para los valores del dominio
		2. Elegir una codificación para los valores del codominio
		3. Traducir a binario ${}f:E\to S{}$
	- Para cada especificación de alto nivel existen infinitas en binario

**Funciones de conmutación**
	- Para simplificar su tratamiento, la función f se descompone en varias funciones de conmutación ${}f_{i}{}$, cada una de ellas encargada de especificar un bit de la salida ${}f:\{0,1\}^{n}\to \{0,1\}{}$
	- Si  toda la función esta definida, esta esta completamente especificada
	- Si una entrada no está especificada se ponen guiones (para lo de karnaugh)
	- El número de funciones de conmutación depende de la salida

**Expresiones de conmutación**
	- Sintaxis:
		* Alfabeto
			+ Variables lógicas: ${}x_{i}{}$
			+ Constantes: 0,1
			+ Operadores: ${}+,*,\bar {}$
			+ Paréntesis
		* En la práctica se omiten muchos paréntesis
			+ ${}()>\bar >*>+{}$
		* También se siuele omitir el operador *
	- Semántica
		* Función not${}\to \overline{}{}$
		* Función and ${}\to *{}$
		* funcion or ${}\to +{}$
	- El valor de una EC es el resultado de sustituir sus variables por los valores indicados y operar

**Álgebra de Boole**

![[Pasted image 20260922184159.png]]
	- Estas propiedades permiten transformar una EC en otras equivalentes sin necesidad de evaluarlas
	- El algebra de Boole solo se usa para EC

**Funciones derivadas**
![[Pasted image 20260922184713.png]]
	- Todas son conmutativas
	- NAND y NOR no son asociativas

**Suma de productos canónica**
	- Mintérmino: término producto de n literales, donde cada variable aparece solo una vez ordenada de mayor a menor peso. 
		* ${}\overline{x_{1}}*x_{0}{}$
		* Abrebiado por ${}m_{i}\ ó \ m(i){}$, donde i es el número cuya representación se obtiene sustituyendo en el mintérmino cada variable negada por 0 y cada variable sin negar por 1. 
	- El valor de un mintérminopara una asignación dada es 
$$
‌	  v(m_{i},\underline{a})= \begin{cases}
1 & si= (\underline{a})_{10} \\
0  & \text{en otro caso }
\end{cases}
	  $$
	  - Suma de productos canónica: suma de mintérminos en la que no hay mintérminos repetidos
		  * ![[Pasted image 20260924181808.png]]
		  * Una SPC es básicamente una enumeración de las filas en las que la FC que representa vale 1
		  * Abusando de notación, una SPC también puede representar una FC incompletamente especificada: 	${}\sum m(7,3,1)+\sum d(5,6)\to{}$en este caso las filas 5 y 6 no están especificadas
		  * La SPC equivalente a una EC puede obtenerse evaluándola en todos los puntos de su dominio
		  * La EC también puede transformarse en SPC equivalente
			  + Se debe expresar como suma de productos
			  + Se debe multiplicar despues cada término producto que no contenga una cierta variable ${}x_i{}$ por${}(x_{i}+\bar{x}_{i})=1{}$ 
			  + (Aplicar las propiedades del álgebra de Boole hasta obtener una suma de productos y luego hacer el segundo paso)

**Mapas de Karnaugh**
	- Tabla de verdad de doble entrada en la que sus celdas cumplen la propiedad de adyacencia.
	- Un MK tiene ${}2^{n}{}$ celdas
		* Ejemplo y referencia importante 6 variables
‌	![[Pasted image 20260924184849.png]]
	- Estrategias:
		* Cada mintérmino se puede cubrir varias veces
		* El cambio de casillas también se hace como su fuese un toroide ya que solo cambia un dígito entre algunas casillas
		* En varias cuadrículas, mismas casillas en distinas cuadrículas están unidas