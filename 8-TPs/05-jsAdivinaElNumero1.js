/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
  
  let adivinador;
  let numerosecreto;
  let contador = 0;


function comenzar()
{
	let maximo = 100;
  let minimo = 1;
  
  numerosecreto = parseInt(Math.round(Math.random() * (maximo - minimo) + minimo));
  document.querySelector("Form").reset();

}

function verificar()
{	

  adivinador = parseInt(document.getElementById("txtIdNumero").value); 
  contador = contador + 1;


  if (adivinador == numerosecreto)
  {
    alert ("Usted es un ganador!, y en solo " + contador + " intentos.");
    alert("Si quieres volver a jugar, presiona COMENZAR");
  }
  else if (adivinador < numerosecreto)
  {
    alert("Te quedaste corto, amigue");
  }
  else
  {
    alert ("Te pasaste, maquina");
  }

  document.getElementById("txtIdIntentos").value = contador;
}

