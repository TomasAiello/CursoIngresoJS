function mostrar()
{
	let estacion;
	let destino;
	const base = 15000;
	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion)
	{
		case "Invierno":

			switch (destino)
			{
				case "Bariloche":
						alert("El costo es de: $" + (base *1.2));
				break;
				
				case "Cataratas":
				case "Cordoba":
						alert("El costo es de: $" + (base - base*0.1));
				break;
				
				case "Mar del plata":
						alert("El costo es de: $" + (base - base*0.2));
				break;
			}
		break;
	
		case "Verano":
			
			switch (destino)
			{
				case "Bariloche":
						alert("El costo es de: $" + (base - base*0.2));
				break;
				
				case "Cataratas":
				case "Cordoba":
						alert("El costo es de: $" + (base *1.1));
				break;
				
				case "Mar del plata":
						alert("El costo es de: $" + (base *1.2));
				break;
			}
			
		break;

		case "Otoño":
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
						alert ("El costo es de: $" + base);
				break;

			}
		break;
	} 


}//FIN DE LA FUNCIÓN