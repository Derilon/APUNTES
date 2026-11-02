**Observaciones**
	- Extractor equivalente al cin
	- Biblioteca estándar fstream
	- Cada archivo de salida o entrada es un tipo nuevo
	- El getline no busca "hacia atrás" - El extractor elimina archivos del buffer
	- Descartar basura en el buffer con ignore o get. Ignorar saltos de línea si lo último que lees en una linea es un int
	- Enum igual que en consola