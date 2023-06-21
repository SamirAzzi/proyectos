//let pelis = require("./peliculas");
//for (let i = 0; i < peliculas.length; i++) {
    //const pelicula = peliculas[i];
    //console.log('Película:', pelicula.id);
    //console.log('Calificación:', pelicula.rating);
    //console.log('Premios:', pelicula.awards);
    //console.log('Duración:', pelicula.length);
    //console.log('Precio:', pelicula.price);
    //console.log('Género:', pelicula.genre);
    //console.log('-----------------------');}
// ejercicio 2 
    const fs = require('fs');

const rutaArchivo = './mensaje.txt';

fs.readFile(rutaArchivo, 'utf8', (error, contenido) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
    return;
  }

  console.log('Contenido del archivo:');
  console.log(contenido);
});
