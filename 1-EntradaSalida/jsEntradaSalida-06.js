/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var Numerouno;
	var Numerodos;
	var Suma;

	Numerouno = document.getElementById("txtIdNumeroUno").value;
	Numerodos = document.getElementById("txtIdNumeroDos").value;

	Suma = parseInt(Numerouno) + parseInt(Numerodos);

	alert(Suma);
}

