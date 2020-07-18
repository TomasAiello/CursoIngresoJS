/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var Sueldo;
	var Result;

	Sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	Result=Sueldo+Sueldo*0.1;


	document.getElementById("txtIdResultado").value = Result;

}
