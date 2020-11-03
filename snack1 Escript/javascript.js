$(document).ready(function(){


const biciclette = [
{
  nome: 'Pinarello',
  peso: 10
},

{
  nome: 'Bianchi',
  peso: 8
},

{
  nome: 'Scott',
  peso: 11
},

];

let biciclettaLeggera = biciclette [0];
let pesoPiuLeggero = biciclette[0].peso;

biciclette.forEach( (element) => {
  if (element.peso < pesoPiuLeggero ) {
    biciclettaLeggera = element;
  }
});
console.log(biciclettaLeggera);


const {nome,peso} = biciclettaLeggera;
$('.container').html(`
  <div>
  <h3>Nome bici leggera: ${nome}</h3>
  <h3>Peso bici leggera: ${peso}</h3>
  </div>
`);


});
