
function mostrar() {
	let tipo;
	let precio;
	let cant;
	let marca;
	let fab;
	let flag = 0;

	//jabon
	let acumjabon = 0;
	let contjabon = 0;
	let maxjabon;
	let fabjabonmax;

	//barbijo
	let acumbarb = 0;
	let contbarb = 0;

	//alcohol
	let acumalcohol = 0;
	let contalcohol = 0;

	let tipomax = ""; 
	let promedio;


	for (let i = 1; i <= 5; i++) {

		do {
			tipo = prompt("ingrese tipo de producto: barbijo/jabon/alcohol");
		} while (!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol"));

		do {
			precio = parseInt(prompt("ingrese precio"));
		} while (precio < 100 || precio > 300);

		do {
			cant = parseInt(prompt("ingrese cantidad de unidades"));
		} while (cant <= 0 || cant > 1000);

		marca = prompt("ingrese marca");
		fab = prompt("ingrese fabricante");

		switch (tipo) {
			case "jabon":
				acumjabon = acumjabon + cant;
				contjabon++;
				if (flag == 0 || maxjabon > precio) {
					maxjabon = precio;
					fabjabonmax = fab;
					flag = 1;
				}
				break;
			case "barbijo":
				acumbarb = acumbarb + cant;
				contbarb++;
				break;
			case "alcohol":
				acumalcohol = acumalcohol + cant;
				contalcohol++;
				break;
		}
	}

	//A
	alert("la cantidad de unidades del mas caro del tipo jabon es: " + acumjabon + " y el fabricante: " + fabjabonmax);

	//B
	if (acumjabon > acumbarb && acumjabon > acumalcohol) {
		tipomax = "jabon";
		promedio = acumjabon / contjabon;
	}
	else if (acumbarb > acumjabon && acumbarb > acumalcohol) {
		tipomax = "barbijo";
		promedio = acumbarb / contbarb;
	}
	else {
		tipomax = "alcohol";
		promedio = acumalcohol / contalcohol;
	}

	alert("el tipo con mas unidades es: " + tipomax + " y el promedio por compra es: " + promedio);

	//C
	alert("la cantidad de unidades tipo barbijo es: " + acumbarb);
}