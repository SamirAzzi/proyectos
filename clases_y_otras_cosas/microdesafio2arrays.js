let dia = 'jueves'
function finDeSemana (dia) {	
   switch (dia == "viernes") {
    case"ultimoDia": console.log('buen finde');
	break;
	case "lunes": console.log('buena semana');
	break;
	default:
	console.log(finDeSemana);
	break;
	}
}
