let electrodomesticos = ["televisor", "heladera", "pava", "microondas", "licuadora", "tostadora"];

console.log(electrodomesticos[3]);
console.log(electrodomesticos[2]);
console.log(electrodomesticos[0]);

let primerElemento = electrodomesticos.shift();
electrodomesticos.push(primerElemento);
console.log(electrodomesticos);

electrodomesticos.push("estufa", "aire acondicionado");
console.log(electrodomesticos);


console.log(electrodomesticos.length);

if(electrodomesticos.includes("Lavarropas")){
    console.log("Producto encontrado");
}else{
    console.log("El producto buscado no existe");
}

console.log(electrodomesticos.join(" "));

let frase = electrodomesticos.join(" ");
console.log(frase.length);

console.log(frase.replace("heladera", "play4"));

let frase2 = frase.replace("heladera", "play4");
console.log(frase2.split(" "));