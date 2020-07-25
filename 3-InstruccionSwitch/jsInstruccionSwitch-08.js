function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch (destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert ("Frio");
			break;
		
		default:
			alert ("Calor");
			break;

	}

}//FIN DE LA FUNCIÓN