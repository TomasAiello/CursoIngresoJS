function mostrar() {
	let nom;
	let nacio;
	let edad;
	let sexo;
	let civil;
	let temp;
	let resp = "s";

	let flag = 0;
	let naciomaxtemp;
	let tempmax;
	let contsolt = 0;
	let contviuda = 0;
	let contsoltera = 0;
	let terceredad = 0; // contador terceredad
	let acumedad = 0; // edad mujeres casadas
	let contcasadas = 0;
	let promedio;


	do {
		nom = prompt("ingrese nombre");
		nacio = prompt("ingrese nacionalidad");
		edad = parseInt(prompt("ingrese edad"));

		do {
			sexo = prompt("ingrese sexo: f/m");
		} while (!(sexo == "f" || sexo == "m"));

		do {
			civil = prompt("ingrese estado civil: soltero/casado/viudo");
			switch (civil) {
				case "soltero":
					if (edad > 17) {
						contsolt++;
					}
					if (sexo == "f") {
						contsoltera++;
					}
					break;
				case "viudo":
					if (sexo == "f") {
						contviuda++;
					}
					break;
				case "casado":
					if (sexo == "f") {
						acumedad = acumedad + edad;
						contcasadas++;
					}
			}
		} while (!(civil == "soltero" || civil == "casado" || civil == "viudo"));

		temp = parseInt(prompt("ingrese temperatura corporal"));

		if (flag == 0 || tempmax < temp) {
			tempmax = temp;
			naciomaxtemp = nacio;
		}

		if (edad > 60 && temp > 38) {
			terceredad++;
		}

		resp = prompt("quiere ingresar otro pasajero? s/n");
	} while (resp == "s");


	//A
	alert("la nacionalidad de la persona con mas temperatura es: " + naciomaxtemp);

	//B
	alert("la cantidad de mayores de edad solteros es: " + contsolt);

	//C
	if (contsoltera != 0) {
		alert("la cantidad de mujeres solteras es: " + contsoltera);
	}
	if (contviuda != 0) {
		alert("la cantidad de mujeres viudas es: " + contviuda);
	}

	//D
	alert("la cantidad de personas de la tercera edad con mas de 38 de temperatura es: " + terceredad);

	//E
	if (acumedad != 0 && contcasadas != 0) {
		promedio = acumedad / contcasadas;
		alert("el promedio de edad entre las mujeres casadas es: " + promedio);
	}


}
