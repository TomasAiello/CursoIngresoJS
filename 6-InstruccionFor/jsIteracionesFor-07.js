function mostrar(){
	
	let num;
	let cont = 0;

	num = parseInt(prompt("ingrese el número de repeticiones"));
	
	for (let i=1 ; i<=num ; i++){
	
		if (num % i === 0){
			alert("el numero " +i+ " es divisor");
			cont++;
		}
	}
	alert("se encontraron " +cont+" numeros divisores");
}