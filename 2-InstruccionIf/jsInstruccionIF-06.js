function mostrar()
{
	var edad;
	
	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad<13)
	{
		alert("Usted es niño");
	}


	if (edad>13 && edad<17)
	
	{
		alert("Usted es adolescente");
	
	}

	if (edad>18)
	{
		alert("Usted es mayor de edad");

	}

}//FIN DE LA FUNCIÓN