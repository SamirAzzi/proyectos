// Clase 5: Funciones

// Funciones
// Un bloque de código que definimos una vez e invocamos las veces que necesitemos

// Definición
// Es cuando definimos qué hace la función
// Se define una vez

// Declarada
function sumar(valor1, valor2) {
  // return: devuelve la respuesta de la función
  let resultado = 0;
  if (valor1 > 0) {
    resultado = valor1 + valor2;
  } else {
    resultado = valor1 - valor2;
  }

  return resultado;
  // console.log("Estoy dentro de la función");
}


// Parámetros
// NO es un valor
// Son variables que en un futuro van a recibir los valores con los que
// va a operar la función
// Función anónimo: una función a la cual no le asignamos nombre

// Expresada

const restar = function (numeroA, numeroB) {
  return numeroA - numeroB;
};
// console.log(typeof restar);

// Ejecución/ Invocar/ Llamar
// Es cuando efectivamente usamos la función
// Ejecutamos las veces que sean necesarias

restar(12, 6);
// console.log(sumar(resultado, 34));
// console.log("El resultado de la suma es " + resultado);
// sumar(45, 25);
// sumar(98, 34);
// console.log("El resultado de la suma es " + resultado);
// restar(12,6);
// console.log(restar(15, 5));
const resultado = sumar(12, 25);
// console.log(resultado);

// Argumentos: son los valores que le pasamos a los parámetros


// Arrow functions
// Sintaxis más reducida
// Son expresada
// Son anónimas siempre
// Si tienen un solo parámetro se pueden omitir los paréntesis, y si no hay parámetros se coloca ()
// Si solo está compuesta por una linea se omiten las llaves
// =>

const sumarArrow = (numA, numB = 0, numC = 0) => numA + numB + numC;
// console.log(sumarArrow(12));
// console.log(sumarArrow(12, 13));
// console.log(sumarArrow(12, 13, 20));



const saludar = (nombre = "usuario", apellido = "anónimo") => {
    return "Hola " +  nombre + " " + apellido + "!!";
};

// console.log(saludar("Facu", "Erbin"));
// console.log(saludar("Facu"));
// console.log(saludar());


// Callbacks
// Es una función que se pasa cómo argumento a otra

function calculadora (numA, numB, operacion) {
    return operacion(numA, numB);
}

// let numA = 12;
// console.log(calculadora(10, 23, (num1, num2) => num1 * num2));
// console.log(calculadora(3, 2, (num1, num2) => num1 ** num2));

let contador = 0;
setInterval(() => {
    if (contador <= 10) {
        console.log(contador ++);
    }
}, 1000);

// CTRL + C para cancelar la ejecución de un script en la terminal.

// console.log(Date.now());

// console.log( "Facu".split(""));