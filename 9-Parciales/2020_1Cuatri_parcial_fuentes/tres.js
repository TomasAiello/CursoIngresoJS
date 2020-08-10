function mostrar() {
	let nom;
	let edad;
	let sexo;
	let civil;
	let temp;
	let resp = "s";

	let maxtemp = 0;
	let nomtempalta;
	let flag = 0;
	let mayorviudo = 0; // contador de mayores de edad viudos
	let acumedad = 0; // acumulador de edad de hombres solteros
	let promedio;

	let contsolt = 0;
	let contviudo = 0;
	let terceredad = 0; // contador de personas de la tercer edad

	do {
		nom = prompt("ingrese nombre");

		edad = parseInt("ingrese edad");

		do {
			sexo = prompt("ingrese sexo: f/m");
		} while (!(sexo == "f" || sexo == "m"));

		do {
			civil = prompt("ingrese estado civil: soltero/casado/viudo");

			switch (civil) {
				case "soltero":
					if (sexo == "m") {
						contsolt++;
						acumedad = acumedad + edad;
						promedio = acumedad / contsolt;
					}
					break;
				case "viudo":
					if (sexo == "m") {
						contviudo++;
					}
					if (edad >= 18) {
						mayorviudo++;
					}
					break;
			}

		} while (!(civil == "soltero" || civil == "casado" || civil == "viudo"));

		temp = parseInt(prompt("ingrese la temperatura corporal"));

		if (flag == 0 || maxtemp < temp) {
			maxtemp = temp;
			nomtempalta = nom;
			flag = 1;
		}

		if (edad > 60 && temp > 38) {
			terceredad++;
		}

		resp = prompt("quiere ingresar otro pasajero? s/n");
	} while (resp == "s");

	//A
	alert("el nombre de la persona con mas temperatura es: " + nomtempalta);

	//B
	alert("la cantidad de mayores de edad viudos es: " + mayorviudo);

	//C
	alert("la cantidad de hombres solteros es: " + contsolt + " y la cantidad viudos: " + contviudo);

	//D
	alert("la cantidad de personas de la tercera edad con mas de 38 de temperatura es: " + terceredad);

	//E 
	if (acumedad != 0 && contsolt != 0) {
		alert("el promedio de edad entre los hombres solteros es: " + promedio);
	}
}