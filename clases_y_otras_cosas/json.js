

let amigos = [ "coco", "pablito", " sus", "franco"];

let amigosJson = JSON.stringify(amigos);

let amigosOriginal = JSON.parse(amigosJson);

//console.log(amigosOriginal);

let persona = {
    nombre: "carli",
    edad: 26,
    domicilio: "calle falsa 123" 
}
// console.log(persona);

let presonaJson = JSON.stringify(persona);

//console.log(presonaJson);

let personaOrginal = JSON.parse(presonaJson);
console.log(personaOrginal);