function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch (destino)
	{
	
		
		case "Mar del plata":
			alert ("Este");
			break;
		
		case "Cataratas":
			alert ("Norte");
			break;

		default:
			alert ("Sur");
			break;
	}

}//FIN DE LA FUNCIÓN