// JSnack 2
// Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
// Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
// Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.

$(document).ready(function(){


const names = ['Lorenzo','Fabio','Francesco','Chiara','Paolo'];

let totale = names.length - 1;
let min = parseInt(prompt('Inserisci un numero minino da 0 a 4') );
let max = parseInt(prompt('Inserisci un numero massimo da 0 a 4') );

let newList = [];
// console.log();

// names.forEach((element, index) => {
//   // se L'utente ad esmpio mette il num tra 1 e 3 l'index dovrà stare tra 1 e 3
//   if(min <= index && max >= index ) {
//     newList.push(element);
//   }
// })


// FILTER verifica solo la condizione
newList = names.filter((element, index) => {
  return min <= index && max >= index ;
   // if(min <= index && max >= index ) {
   //      return element
   //    } è la stessa cosa 
})

console.log(newList);

});
