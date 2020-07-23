/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Numerouno;
	var Numerodos;
	var Suma;

	Numerouno = document.getElementById("txtIdNumeroUno").value;
	Numerodos = document.getElementById("txtIdNumeroDos").value;

	Suma = parseFloat(Numerouno) + parseFloat(Numerodos);

	alert("la suma es "+Suma);


}

function restar()
{
	var Numerouno;
	var Numerodos;
	var Resta;

	Numerouno = document.getElementById("txtIdNumeroUno").value;
	Numerodos = document.getElementById("txtIdNumeroDos").value;

	Resta = parseFloat(Numerouno) - parseFloat(Numerodos);

	alert("la resta es "+Resta);
	
}

function multiplicar()
{ 
	var Numerouno;
	var Numerodos;
	var Multiplicar;

	Numerouno = document.getElementById("txtIdNumeroUno").value;
	Numerodos = document.getElementById("txtIdNumeroDos").value;

	Multiplicar = parseFloat(Numerouno) * parseFloat(Numerodos);

	alert("la multiplicacion es "+Multiplicar);

}
	

function dividir()
{
	var Numerouno;
	var Numerodos;
	var Dividir;

	Numerouno = document.getElementById("txtIdNumeroUno").value;
	Numerodos = document.getElementById("txtIdNumeroDos").value;

	Dividir = parseFloat(Numerouno) / parseFloat(Numerodos);

	alert("la division es "+Dividir.toFixed(2));
	
	
}