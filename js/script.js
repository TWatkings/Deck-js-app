let pokemonRepository = (function () {
  let repository = [
    {name:'Venusar', height:2, type:['monster','grass']},
    {name:'Onix', height:8.8, type:[' mineral']},
    {name:'Alakazam', height:1.5, type:[' humanLike']},
    {name:'Mienshao', height:1.4, type:[' Field', ' humaLike']},
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    
    
    button.addEventListener('click', function (pokemon) {
      showDetails(pokemon);
    })
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
  
})();

pokemonRepository.add({ name: "Matapod", height: 2.4, types: ["bug"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
