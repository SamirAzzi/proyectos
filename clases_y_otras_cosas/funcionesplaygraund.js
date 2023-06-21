// funcion expresada 

let sumar = function (NumeroA, NumeroB){
    return NumeroA + NumeroB
};

console.log(sumar(7,8));

// funcion declarada 

function resta (numeroC, numeroD) {
return numeroC - numeroD
}

console.log(resta(10,25));

// ejemplo de scope 

let mensaja = "hola";

function saludar (){
 
    return mensaja
}
console.log(saludar());

function buenas(nombre = "visitante", apellido = "anonimo"){
    
return "hola" + nombre + " " + apellido;
}

console.log(buenas());