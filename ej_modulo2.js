  //Ejercicios del Modulo 2 de JavaScript

// Tu nombre (string)
var myName = ' Alan Matthias Galvan Duarte (imh1pst) ';
console.log(typeof myName);

//Tu edad (number)
const myEga = 33;
console.log(typeof myEga);

// Eres desarrollador> {boolean}
let profession = "soy-desarrollador";
console.log( true === profession );

if(true) {
    console.log("si soy desarrollador")
} else {
    console.log("No soy desarrollador")
}

//Tu fecha de nacimiento (Date)
const ahora = new Date();
console.log(ahora);


//Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
const libroFavorito = [titulo="la divina comedia", autor="Dante Alighieri", 
fecha="1304 a 1321", url="https://www.culturagenial.com/es/divina-comedia/"]; 

console.log(libroFavorito);

const libroFavorito2 = {
    titulo:"la divina comedia", 
    autor:"Dante Alighieri", 
    fecha:1304,
    url:"https://www.culturagenial.com/es/divina-comedia/"
};
console.log(libroFavorito2);
