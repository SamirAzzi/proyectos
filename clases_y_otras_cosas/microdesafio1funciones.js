// 1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
// 2. Crea una función que permita calcular el monto a pagar por el alquiler de un
// vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y “silla
// para bebe”.
// 3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las
// siguientes consideraciones:
// ● De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
// ○ Compacto: $14000
// ○ Mediano: $17000
// ○ Camioneta: $28000
// ● Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día
// de $1200

function calcularMontoAlquiler(tipoVehiculo, diasAlquiler, sillaBebe) {
    let montoPorDia;
  
   
    switch (tipoVehiculo) {
      case "compacto":
        montoPorDia = 14000;
        break;
      case "mediano":
        montoPorDia = 17000;
        break;
      case "camioneta":
        montoPorDia = 28000;
        break;
      default:
        return "Tipo de vehículo inválido";
    }
  
    let montoTotal = montoPorDia * diasAlquiler;
  
    if (sillaBebe) {
      montoTotal += 1200 * diasAlquiler;
    }
  
    return montoTotal;
  }

  console.log(calcularMontoAlquiler("mediano", 3, true));