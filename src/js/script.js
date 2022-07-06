let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  } 
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector("ul");
    let listpokemon = document.createElement("li");
    listpokemon.classList.add("group-list-item");
    listpokemon.classList.add("col-sm-12", "col-md-6", "col-lg-4");
    let button = document.createElement("button");
    button.innerText = capitalizeFirstLetter(pokemon.name);
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", ".modal");
    $(button).addClass("button-class btn-block btn m1");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }
  const body = document.body;
  const loadingMessage = document.createElement("div");
  body.append(loadingMessage);

  function showLoadingMessage() {
    loadingMessage.innerText = "Loading...";
    console.log("Loading...");
  }
  function hideLoadingMessage() {
    loadingMessage.remove();
    console.log("Loading complete");
  }


  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        hideLoadingMessage();
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        hideLoadingMessage();
        item.imageUrl = details.sprites.other["official-artwork"].front_default;
        item.height = details.height;
        item.weight = details.weight;
        let types = [];
        details.types.forEach((item) => types.push(item.type.name));
        item.types = types;
        // this catches any errors
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");
  
    modalTitle.empty();
    modalBody.empty();

    // add details of the pokemon

    // name
    let nameElement = $("<h1>" + item.name + "</h1>");
    // height
    let heightElement = $("<p>" + "Height: " + item.height + "</p>");
    // type
    let typeElement = $("<p>" + "Types: " + item.types.join(", ") + "</p>");
    // weight
    let weightElement = $("<p>" + "Weight: " + item.weight + "</p>");

    // add the pokemon image
    let myImage = $('<img class="pokemon-modal">');
    myImage.attr("src", item.imageUrl);

    modalBody.append(myImage);
    modalTitle.append(nameElement);
    modalBody.append(heightElement);
    modalBody.append(typeElement);
    modalBody.append(weightElement);
  }

  // capitalize pokemon name
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});