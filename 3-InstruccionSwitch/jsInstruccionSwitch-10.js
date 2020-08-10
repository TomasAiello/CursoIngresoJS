function mostrar() {
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {
		case "Invierno":
		case "Primavera":
			if (destino == "Bariloche") {
				alert("Puede viajar a este destino");
			}
			else {
				alert("No se viaja a este destino en esta estacion");
			}
			break;

		case "Verano":

			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
					alert("Puede viajar a este destino");
					break;

				default:
					alert("No se viaja a este destino en esta estacion");
					break;
			}
			break;

		case "Otoño":
			alert("Puede viajar a este destino");
			break;
	}
}