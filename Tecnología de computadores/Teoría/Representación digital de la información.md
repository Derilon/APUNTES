Toda la información se tiene que codificar en binario. 

**Sistema**
‌	x(t) son entradas
‌	Usa una función f
‌	Envía la información a sus salidas z (t)
	
**Sistemas combinacionales y secuenciales**
	- Combinacional - ${z}(t_{i})=f(x_{t_{i}})$
	- Secuencial - ${}z(t_{i})=f(x_{t}){}$
	
**Sistemas asíncronos y síncronos**
	- Asíncronos - entradas y salidas cambian en cualquier momento
	- Síncrono - solo cambian en un conjunto discreto de señales (clk)
	
**Especificación  e implementación**
‌	Especificación - comportamiento
‌	Implementación - descripción
	
**Síntesis y análisis**
‌	Transiciones de la especificación a la implementación y viceversa
	
 <b><u>Sistemas de numeración</u></b>
‌	Nota: recomendado no decir los números como decimales (decirlos como cifra)
‌	$$n(x)=\pm\left( \sum_{i=-m}^{n-1} v(x_{i})\right)=\pm\left( \sum_{i=-m}^{n-1}x_{i}r^{i}\right)$$$${}i \equiv posición{}   \quad     {}x \equiv dígito{}     \quad    {}r\equiv base{}$$
**Binario-decimal**
‌	Se calcula el valor de la cadena binaria
	
**Decimal-binario**
‌	Parte entera se divide por 2 hasta que el cociente sea menor que 2. Parte fraccionaria se multiplica por 2 reservando las partes enteras hasta 0 
	
**Aritḿetica binaria**
‌	Tablas de dígitos

| Suma              | Resta             | Multiplicación |
| ----------------- | ----------------- | -------------- |
| 0+0=0             | 0-0=0             | 0*0=1          |
| 0+1=1             | 0-1=0 y 1 llevada | 0*1=0          |
| 1+0=1             | 1-0=0             | 1*0=0          |
| 1+1=0 y 1 llevada | 1-1=0             | 1*1=0          |
|                   |                   |                |

 **Representación de la información**
‌	  Vectores de dígitos binarios

| Nombre      | Anchura  |
| ----------- | -------- |
| bit (b)     | 1b       |
| Byte (B)    | 8b 1B    |
| nibble      | 4b 1/2B  |
| word        | 32b 4B   |
| half word   | 16b 2B   |
| double word | 64b 8B   |
| quad word   | 128b 16B |

<u><b>Codificación</b></u>
	- Convenio que asocia a cada dato una representación binaria
	- Cada codificación tiene nombre y anchura fija
	- Con n bits se representan como máximo ${}2^{n}{}$ datos distintos 

**Hexadecimal como binario compacto**
‌	Codificación en hexadecimal ${}0\rightarrow F \equiv 15 {}$
	$$
		 \underset{nibble}{\underline{0001}}\ \underline{0011}\ \underline{1101} = 13D \equiv 13D\equiv 0x{13}D
	$$
	
**Codificaciones alfanuméricas - ASCII**
‌	Codifica el alfabeto latino con 7 bits 

<u><b>Codificaciones numéricas</b></u>

**Enteros sin signo**
	- Notación n bits: ${}N=(N)_{n bits}{}$
	- Rango representable ${}[0,+(2^{n}-1)]{}$
	- Hay desbordamiento si al sumar el MSB se produce un acarreo 
	
**Notación BCD**
	- Notación 4-d bits Dígitos decimales a nibbles. Anchura múltiplo de 4. El nibble en binario no puede superar 9
	- Rango representable ${}= [0,+(10^{d}-1)]{}$
	- No se puede sumar
	
**Notación Magnitud y signo**
	- n bits:
		* Positivos: ${}+N=0(N)_{2:(n-1b)}{}$ 
		* Negativos: ${}-N=1(N)_{2:(n-1b)}{}$
	- Rango representable: ${}\left[-(2^{n-1}-1),\ +(2^{n-1}-1)\right]{}$
	- Aritmética
		* Cambio de signo: cambiar el primer bit
		* Extensión: mantener el signo, completar con ceros
		* Completar manteniendo el bit de signo
		* Suma: El número más grande manda y aplican las tablas de aritmética con signos
		* Hay dos ceros - +0 y -0
	
**Notación C2**
	- El bit de signo no es especial: el MSB tiene peso ${}-2^{n-1}{}$
	- SOLO hay un 0, no hay duplicados
	- Codificación:
‌		${}+N=(N)_{2:(nb)}\to{}$ sólo valido si ${}MSB=0{}$
‌		${}-N=C2(N)_{2:(nb)}\equiv(2^{n}-N)_{C2:nb}{}$
	- Rango representable ${}= [-(2^{n-1}),(2^{n-1}-1)]{}$
	- Aritmética
		* Cambio de signo (hay varias opciones)
			1. Restar el número a ${}2^{n}{}$
			2. Invertir todos los bits y sumar 1
			3. Copiar los bits de derecha a izquierda hasta encontrar el primer 1, invertir el resto(no invertir el primer 1)
		* Extensión: copiar el MSB n-n' veces
		* Solo puede haber desbordamiento al sumar dos números del mismo signo. Se detecta si el signo del resultado es coherente con el signo de los operandos, no con el MSB
	
**Notación sesgada**
	- K es sesgo ${}N=(N+K)_{2:(n bits)}{}$
	- No existe bit de signo 
	- Codificación: sumar K al número y representar el resultado en binario con n bits
	- Notación: ${}(N)_{EX-K:nb}{}$
	- Rango representable: ${}[-K, 2^{n}-1-K]{}$
	
**Representación de racionales**
	- El punto fraccionario está a la izquierda del LSB en las codificaciones enteras
	- Punto fijo (Qn.mb) usan n bits para la parte entera y m bits para la parte fraccionaria
	- Escalado: desplazar el punto a la derecha
		* Generaliza el punto fijo al resto de codificaciones, ya que se representa como un entero y  en la notación aparece cuántos bits son racionales
		* Ejemplo: ${}6.25=110.010_{2}=(00110010)_{2:Q5.3b}\rightarrow{}$ Se puede expresar en cualquier notación, no solo en binario puro 
	- Decodificación ${}(N)_{2:Qn.mb}=\frac{N}{2^3}{}$
	- Rango
		* Binario puro: ${}[0,2^{n}-2^{-m}]{}$
		* MS: ${}[-(2^{n-1}-2^{-m}),+(2^{n-1}-2^{-m})]{}$
		* C2: ${}[-(2^{n-1}),+(2^{n-1}-2^{-m})]{}$
	- A más bits enteros, más rango representable, a más bits fraccionarios más precisión. Si existe un número fijo de bits se debe alcanzar un compromiso entre rango y precisión 
	- Rescalado: completar con ${}m'-m{}$ ceros a la derecha
	- En punto fijo, existe un error ya que solo se pueden representar un subconjunto de racionales existentes dentro del rango y el resto se representan de forma aproximada. En punto fijo, la resolución es la diferencia entre dos números consecutivos ${}\to\Delta=2^{-m}{}$
	
**Modos de redondeo**
	- Al más cercano: Error máximo ${}=\frac{\Delta}{2}=2^{-(m-1)}{}$
	- Hacia cero: Error máximo ${}=\Delta{}$
	- Hacia ${}+\infty{}$: Error máximo ${}=\Delta{}$
	- Hacia ${}-\infty{}$: Error máximo ${}=\Delta{}$
	
**Reales en punto flotante (IEEE 754)**
	- Notación en 32 bits (precisión simple)
	- En punto flotante, la posición del punto es variable e indicada explícitamente. Permite tener un rango virtualmente ilimitado a costa de una notación variable 
	- ${}1\ bit \ (S){}$ codifica el signo
	- ${} 8 \ bits \ (E){}$ codifican el exponente en exceso ${}2^{7}-1{}$
	- ${}23 \ bits \ (M){}$ codifican en binario la fracción de la mantisa
		* Todo número normalizado tienen un 1 a la izquierda del punto por lo que no se codifica y está implícito
		* Si la fracción de la mantisa tiene más de 23 bits, se redondea
	- Casos especiales:
		* ${}E= \ (00h) \ y \ M =0 \to 0{}$
		* ${}E=(00h) \ y \ M \neq 0 \to {}$ Números desnormalizados ${}\to{}$ E=-126
		* ${}E=(FFh ) \ y \ M=0 \to \pm\infty{}$
		* ${}E=(FFh) \ y \ M \neq 0 \to{}$ NaN
	- Expresar el número en notación científica binaria 
	- Números normalizados: ${}-126 \leq \exp\leq127{}$
	- ${}\infty: \text{exp}>127{}$ según el signo + o -
	- Números desnormalizados${}\to -149\leq \text{exp}\leq-127{}$
		* Por cada desplazamiento de un bit a la derecha de M el exponente aumenta en 1
		* Cero: ${}\exp <-149{}$
	- Codificación 
		* Codificación de ${}N=\pm 1*M_{2}*2^{E} \ con -126\leq E \leq 127{}$ (normalizados)
	$$
		({\underline{x}})_{\text{IEEE-754:32}}=\begin{cases}
		(0,(E)_{EX-127:8},redondeo(M)_{2:23})&N>0\\(1,(E)_{EX-127:8},redondeo(M)_{2:23})&N<0
		
		\end{cases}
	$$
	- Decodificación de ${}(\underline{x})=(S,E,M) \ normalizado{}$
		* ${}v(\underline{x})_{IEEE-754:32}=(-1)^{S}*v(1M)_{2:Q1.23}*2^{v(E_{EX-127:8})}{}$



