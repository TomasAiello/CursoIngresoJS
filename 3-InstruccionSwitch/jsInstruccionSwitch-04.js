function mostrar()
{
	let mes; 
	mes = document.getElementById("txtIdMes").value;
	
		switch(mes)

		{
			case "Febrero":	
				alert ("Este mes no tiene 28 0 29 dias");
				break; 
			
			case "Abril":
			case "Junio":
			case "Septiembre":
			case "Noviembre":
				alert ("Este mes tiene 30 dias");
				break;
			
			
			default:
				alert ("Este mes tiene 31 dias");
				break;
		
		}
}