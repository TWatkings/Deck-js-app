//Array of pokemons, their height, and type.
let pokemonList = [
   
   
    {name:'Venusar', height:2, type:['monster','grass']},
    {name:'Onix', height:8.8, type:[' mineral']},
    {name:'Alakazam', height:1.5, type:[' humanLike']},
    {name:'Mienshao', height:1.4, type:[' Field', ' humaLike']}

];


pokemonList.forEach(function(pokemonArr) {
  document.write('<p>' + pokemonArr.name + '</p>' + 'Height ' + pokemonArr.height +'' + '<p>' + pokemonArr.type + '</p>' );
 
});



















