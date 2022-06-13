//Array of pokemons, their height, and type.
let pokemonRepository = (function() {
  let pokemonList = [
   
   
    {name:'Venusar', height:2, type:['monster','grass']},
    {name:'Onix', height:8.8, type:[' mineral']},
    {name:'Alakazam', height:1.5, type:[' humanLike']},
    {name:'Mienshao', height:1.4, type:[' Field', ' humaLike']}

];

function add(metapod) {
  
  pokemonList.push(metapod);
}

function getAll() {
 return pokemonList;
}
return {
  add:add, 
  getAll:getAll
}

})();

console.log(pokemonRepository.add());
pokemonRepository.add({name: 'metapod'});
console.log(pokemonRepository.getAll());





pokemonRepository.getAll().forEach(function(pokemonArr) {
  document.write('<p>' + pokemonArr.name + '</p>' + 'Height ' + pokemonArr.height +'' + '<p>' + pokemonArr.type + '</p>' );
 
});

























