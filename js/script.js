//Array of pokemons, their height, and type.
let pokemonList = [
   
   
    {name:'Venusar', height:2, type:['monster','grass']},
    {name:'Onix', height:8.8, type:[' mineral']},
    {name:'Alakazam', height:1.5, type:[' humanLike']},
    {name:'Mienshao', height:1.4, type:[' Field', ' humaLike']}

];
for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + '(height):'); 

    document.write(pokemonList[i].height);
    if (pokemonList[i].height > 5) {
        
        document.write(pokemonList[i].height + ' wow thats BIG!');
    }
  

    
}


