/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Numerouno;
	var Numerodos;
	var Resto;

	Numerouno = document.getElementById("txtIdNumeroDividendo").value;
	Numerodos = document.getElementById("txtIdNumeroDivisor").value;

	Resto= parseInt(Numerouno) % parseInt(Numerodos);


	alert("El resto es "+Resto);
}
