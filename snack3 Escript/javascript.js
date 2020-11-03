// JSnack 3
// Creiamo un array di oggetti (scelti da voi)
// Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale.

$(document).ready(function(){

  const arrayObj = [

  {name:'Poppy',
  type: 'tshirt',
  color:'red'},

  {name:'Jumping',
  type: 'okkiali',
  color:'blue'},

  {name:'CrissCross',
  type: 'scarpe',
  color:'black'},

  {name:'Jenny',
  type: 'borsa',
  color:'pink'},
  ];

// Facciamo una copia dell'array
  const newArrayObj = [...arrayObj].map(person =>{
    return{
      ...person,
      position: getPosition(),
    }
  });

console.table(arrayObj);
console.table(newArrayObj);

// Genera random position
function getPosition(){
  const letters = 'abcdefghilmnopqrstuvwxyz' ;

  const letter = letters[getRandomNumber(0, letters.length - 1)];

  return letter;
}

// Genera numeri random
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

});
