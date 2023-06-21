//1. Crea una carpeta de trabajo y dentro de ella un archivo JavaScript (.js).
//2. Desarrolla un programa que le indique al usuario - en base a su perfil o
//responsabilidades - qué puede hacer o no en el sistema. Para eso debes crear una
//variable llamada: “perfil” y asignarle alguno de estos valores:
//a. administrador
//b. asistente
//c. invitado.

let perfil = "undefined"; 


switch (perfil) {
    case "administrador": console.log("Usted tiene todos los privilegios de uso del sistema");
     break;
    case "asistente":console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
    break;
    case "invitado":console.log("Usted sólo tiene permisos de consultar datos");
    break;
    case "null":console.log("Debe especificar el perfil del usuario");
    break;
    case "undefined":console.log("Debe especificar un perfil válido");
    default:
        console.log(perfil);
        break;
}