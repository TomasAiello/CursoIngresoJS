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
		case "Bariloche":
			alert ("Oeste");
		case "Ushuaia":
			alert ("Sur");
			break;
		default:
			alert ("Esta provincia no esta contemplada");
			break;
	}

}//FIN DE LA FUNCIÓN