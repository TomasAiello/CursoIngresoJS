function mostrar() {
  let resp = "s";
  let tipo = "";
  let tipomax = "";
  let preciobolsa;
  let acumprecio = 0;
  let cant;
  let acumbolsa = 0;
  let descuento;
  let acumarena = 0;
  let acumcal = 0;
  let acumcemento = 0;
  let flag = 0;
  let preciotipomax;
  let tipomaxprecio = "";

  do {
    do {
      tipo = prompt("ingrese tipo: arena/cal/cemento");
      switch (tipo) {
        case "arena":
          acumarena++;
          if (flag == 0 || preciotipomax > preciobolsa) {
            preciotipomax = preciobolsa;
            tipomaxprecio = "arena";
            flag = 1;
          }
          break;
        case "cal":
          acumcal++;
          if (flag == 0 || preciotipomax > preciobolsa) {
            preciotipomax = preciobolsa;
            tipomaxprecio = "cal";
            flag = 1;
          }
          break;
        case "cemento":
          acumcemento++;
          if (flag == 0 || preciotipomax > preciobolsa) {
            preciotipomax = preciobolsa;
            tipomaxprecio = "cemento";
            flag = 1;
          }
          break;
      }
    } while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento"));

    do {
      preciobolsa = parseInt(prompt("ingrese precio por bolsa"));
      acumprecio = acumprecio + preciobolsa;
    } while (preciobolsa <= 0);

    cant = parseInt(prompt("ingrese cantidad de bolsas"));
    acumbolsa = acumbolsa + cant;


    resp = prompt("quiere ingresar otro producto? s/n");
  } while (resp == "s");


  //descuento
  if (acumbolsa > 10) {
    descuento = acumprecio - (acumprecio * 0.15);
    alert("el importe total con descuento es: " + descuento);
  }
  else if (acumbolsa > 30) {
    descuento = acumprecio - (acumprecio * 0.25);
    alert("el importe total con descuento es: " + descuento);
  }

  //A
  alert("el importe total a pagar bruto es: " + acumprecio);
  
  //D
  if (acumarena > acumcal && acumarena > acumcemento) {
    tipomax = "arena";
  }
  else if (acumcal > acumarena && acumcal > acumcemento) {
    tipomax = "cal";
  }
  else {
    tipomax = "cemento";
  }
  alert("el tipo con mas cantidad de bolsas es: " + tipomax);
  //F
  alert("el tipo mas caro es: " + tipomaxprecio);


}
