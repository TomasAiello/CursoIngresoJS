function mostrar()
{

	let maximo =10;
	let minimo =1;
	let num;
	
	num = Math.round(Math.random() * (maximo - minimo) + minimo );
				   
	if (num>=4 && num<9)
	{
		alert ("SU NOTA ES: " + num + ", APROBO.");
	}
	else if (num>=9)
	{
		alert ("SU NOTA ES: " + num + ", EXCELENTE.");
	}
	else 
	{	
		alert("SU NOTA ES: " + num + ", Vamos, la proxima se puede.");
	}
		

}//FIN DE LA FUNCIÓN