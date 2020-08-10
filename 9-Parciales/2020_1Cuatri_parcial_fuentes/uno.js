
function mostrar() {
	let tipo;
	let precio;
	let cant;
	let marca;
	let fab;

	let acumbarbijo = 0;
	let acumalcohol = 0;
	let acumjabon = 0;

	let contjabon = 0;
	let contbarbijo = 0;
	let contalcohol = 0;

	let alcoholmin;

	let fabriminalcohol;
	let flag = 0;
	let tipomax = "";
	let promedio;


	for (let i = 1; i <= 5; i++) {

		do {
			tipo = prompt("Ingrese tipo: barbijo/jabon/alcohol");
		} while (!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol"));

		do {
			precio = parseInt(prompt("Ingrese precio"));
		} while (precio < 100 || precio > 300);

		do {
			cant = parseInt(prompt("Ingrese cantidad de unidades"));
		} while (cant <= 0 || cant > 1000);

		fab = prompt("Ingrese el fabricante");

		marca = prompt("Ingrese la marca");

		switch (tipo) {
			case "alcohol":
				acumalcohol = acumalcohol + cant;
				contalcohol++;

				if (flag == 0 || alcoholmin > precio) {
					alcoholmin = precio;
					contalcoholmin = cant;
					flag = 1;
					fabriminalcohol = fab;
				}
				break;

			case "jabon":
				acumjabon = acumjabon + cantidad;
				contjabon++;
				break;

			case "barbijo":
				acumbarbijo = acumbarbijo + cantidad;
				contbarbijo++;
				break;
		}
	}

	if (contalcohol != 0) {
		alert("la cantidad de unidades de la categoria alcohol es :" + contalcohol + " y el fabricante es: " + fabriminalcohol);
	}

	if (contjabon != 0) {
		alert("la cantidad de categoria jabon es: " + contjabon);
	}

	if (contalcohol > contjabon && contalcohol > contbarbijo) {
		tipomax = "alcohol";
		promedio = acumalcohol / contalcohol;
	}
	else if (contjabon > contalcohol && contjabon > contbarbijo) {
		tipomax = "jabon";
		promedio = acumjabon / contjabon;
	}
	else {
		tipomax = "barbijo";
		promedio = acumjabon / contbarbijo;
	}
	alert("el maximo de unidades es de la categoria: " + tipomax + " y el promedio es: " + promedio);
}