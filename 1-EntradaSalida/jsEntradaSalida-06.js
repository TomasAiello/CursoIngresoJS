/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var Numerouno;
	var Numerodos;
	var Suma;

	Numerouno = parseInt(document.getElementById("txtIdNumeroUno").value);
	Numerodos = parseInt(document.getElementById("txtIdNumeroDos").value);

	Suma = Numerouno + Numerodos;

	alert(Suma);
}

