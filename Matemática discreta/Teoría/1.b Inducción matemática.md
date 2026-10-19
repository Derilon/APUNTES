**Inducción  matemática**
	- Método de demostración de una proposición en el que se demuestra este para un caso base definido, se demuestra para un valor arbitrario k (instanciación universal) y posteriormente para k+1. Como k es un valor arbitrario se verifica su validez para todo ${}\mathbb{N}{}$. No es lo mismo decir que algo se cumple en un k arbitrario a decir que se cumple en ${}\mathbb{N}{}$. Se debe tomar el caso k+1 y derivar la conclusión de inducción mediante la HIP

**Inducción fuerte**
	- No añade nada nuevo a la teoría. Si se tiene un predicado que depende de valores anteriores a k, se presupone cierto para el intervalo ${}(c,k){}$. Posteriormente se opera con k usando para la HIP IND un número entre el caso base (c) y k ${}\to c<l<k{}$. 
	- Suele tener más de un caso base
	- El PIF es
	- Ejemplo: 
$$
s_1=3, \ s_{2}=5, \ s_{n}=3s_{n-1}-2s_{n-2} \quad \text{Demuestra que } \forall n\in \mathbb{N}_{1}:s_{n}=2^{n}+1 \text{ para k>3 arbitrario}
$$
		- Casos base:
‌	‌		${}2^{1}+1=2+1=3=s_1{}$
‌	‌	‌	${}2^²+1=4+1=5=s_2{}$
		- Paso inductivo - HIP
$$
	\begin{aligned} 
	\forall l \in \mathbb{N}, \ l<k, s_{l}=2^{l}+1 \ \text{para k}>2 \ arbitrario
	\end{aligned}
$$
		- Conclusión de inducción
$$
‌		s_k=2^{k}+1
‌		  $$
		- Derivación 
$$
\begin{aligned}
s_{k}=3s_{k-1}-2s_{k-2}=3(2^{k-1}+1)-2(2^{k-2}+1)\\
s_{k}=3*2^{k-1}+3-2*2^{k-2}-2=\\3*2^{k-1}-2*2^{k-2}+1=\\
2^{k-1}*2+1=\\
2^{k}+1
\end{aligned}
$$
		- Resultado
			* Se demuestra por inducción fuerte que ${}\forall n\in \mathbb{N}_{1}:s_{n}=2^{n}+1{}$


