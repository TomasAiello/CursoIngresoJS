function mostrar()
{
	let hora;
	hora = parseInt(document.getElementById("txtIdHora").value);
	
	if (hora <= 24 && hora >= 0)

	{
		switch (hora)
		{
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
				alert ("Es de mañana");
				break;
		}
	}

}

/*

let hora;
hora = parseFloat(document.getElementById("txtIdHora").value).toFixed(2);
if (hora >= 7 && hora <= 11)
{
	alert ("Es de Mañana");
} 

*/