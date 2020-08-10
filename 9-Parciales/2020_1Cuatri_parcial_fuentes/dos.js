function mostrar() {
  let tipo;
  let resp = "s";
  let cant;
  let preciobolsa;
  let flag = 0;
  let acumarena = 0;
  let acumcal = 0;
  let acumcemento = 0;
  let tipomaxcant;
  let tipomaxprecio = 0;
  let acumprecio; // precio total sin descuento
  let descuento; // 

  do {
    
    do {  
      tipo = prompt("ingrese tipo de producto: arena/cal/cemento");
      switch (tipo) {
        case "arena":
          acumarena = acumarena + cant;
            if(flag == 0 || tipomaxprecio > preciobolsa){
              tipomaxprecio = "arena";
              flag = 1;
            }
          break;
        case "cal":
          acumcal = acumcal + cant;
          if(flag == 0 || tipomaxprecio > preciobolsa){
            tipomaxprecio = "cal";
            flag = 1;
          }
          break;
        case "cemento":
          acumcemento = acumcemento + cant;
          if(flag == 0 || tipomaxprecio > preciobolsa){
            tipomaxprecio = "cemento";
            flag = 1;
          }
          break;
      }
    }while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento"));

      do {
        preciobolsa = parseInt(prompt("ingrese precio"));
        acumprecio = acumprecio + preciobolsa;
      } while (preciobolsa <= 0);

      cant = parseInt(prompt("ingrese cantidad de bolsas"));

    resp = prompt("quiere ingresar otro producto: s/n");
  } while (resp == "s");


  //A y B
  alert("el importe sin descuento es: $" + acumprecio);

  if (cant > 10) {
    descuento = acumprecio * 0.15;
    alert("el importe con descuento: $" + descuento);
  }
  else if (cant > 30) {
    descuento = acumprecio * 0.25;
    alert("el importe con descuento: $" + descuento);
  }

  // D

  if (acumarena > acumcal && acumarena > acumcemento) {
    tipomaxcant = "arena";
  }
  else if (acumcal > acumarena && acumcal > acumcemento) {
    tipomaxcant = "cal";
  }
  else {
    tipomaxcant = "cemento";
  }

  alert("el tipo con mas cantidad de bolsas es: " + tipomaxcant);

  //F

  alert ("el tipo mas caro es: " + tipomaxprecio);

}
