function mostrar() {
	let num;
	let cont = 0;

	do{
	num = parseInt(prompt("ingrese un numero"));
	}while (num <= 1 || isNaN(num));

	for (let i= 1 ; i<=num ; i++){
	
		if (num % i === 0){
			cont++;
		}
	}

	if (cont == 2){
		alert("el numero es primo");
	}
	else{
		alert("el numero NO es primo");
	}
}//FIN DE LA FUNCIÓN