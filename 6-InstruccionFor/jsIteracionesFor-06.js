function mostrar() {
	let num;
	let cont = 0;

	num = parseInt(prompt("ingrese la cantidad de numeros"));

	for (let i = 1; i <= num; i++) {

		if (i % 2 == 0) {
			alert("el numero " + i + " es par");
			cont++;
		}
	}
	alert("se encontraron " + cont + "numeros pares");

}//FIN DE LA FUNCIÓN