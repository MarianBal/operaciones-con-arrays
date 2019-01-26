console.log('Hola Mundo');

/*
frutas.shift(); // elimina el primer elemento.
Unshift:
frutas.unshift('Fresa'); // añade al inicio un nuevo elemento.
Ejercicio: elimina el primer elemento del array, y coloca en su lugar,
tu fruta o verdura preferida.*/

var frutas = ['Manzana', 'Banana'];

frutas.shift();

console.log(frutas);

frutas.unshift('Durazno');

console.log(frutas);


var frutas = ["Fresa", "Banana", "Mango"];

//var pos = frutas.indexOf(‘Banana’); 
// nos indica la posición de un elemento dentro del array. Devuelve un numero.

console.log(frutas.indexOf('Mango'));

//frutas.splice(0, 1);
// elimina un elemento de un array y recibe dos parámetros, que deben ser números:
//Primero, el indice del elemento que vamos a eliminar.
//Segundo, la cantidad de elementos a eliminar.

frutas.splice(1,1);

console.log(frutas);

//Si el indice es un número impar, imprimí por consola, el valor del elemento.

var frutas = ["Fresa", "Banana", "Mango", "Durazno", "Cereza", "Uva"];

console.log(frutas);
console.log(frutas.indexOf(frutas[1]) + ': ' + frutas[1] +'. ' + frutas.indexOf(frutas[3]) + ' :'  + frutas[3] +'. ' + frutas.indexOf(frutas[5]) + ': ' + frutas[5] +'. ' );


//Dado un array que contiene los siguientes strings: determinar si un
//color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

var colores =  ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

var consulta = prompt('Decime un color');

if(colores.includes(consulta)){
    console.log(consulta + ' está dentro del array');
} else {
    console.log(consulta + ' no está dentro del array');
}

//El sort() método ordena los elementos de un array en su
//lugar y devuelve un nuevo array.
//Ejercicio: Ordernar los siguiente arrays:

var misMascotas = [ 'Tom', 'Jerry', 'Donald', 'Pluto'];
var colores = ['Azul', 'Naranja', 'Amarillo', 'Verde'];

misMascotas.sort();

colores.sort();