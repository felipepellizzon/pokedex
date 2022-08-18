console.log("You have connected...");

document.addEventListener("DOMContentLoaded", () => {
  let spanKanto = document.getElementById("first");
  spanKanto.addEventListener("click", renderFirstGeneration);

  let spanKantoShiny = document.getElementById("firstShiny");
  spanKantoShiny.addEventListener("click", renderFirstGenerationShiny);

  let spanJohto = document.getElementById("second");
  spanJohto.addEventListener("click", renderSecondGeneration);

  let spanJohtoShiny = document.getElementById("secondShiny");
  spanJohtoShiny.addEventListener("click", renderSecondGenerationShiny);

  let spanHoenn = document.getElementById("third");
  spanHoenn.addEventListener("click", renderThirdGeneration);

  let spanHoennShiny = document.getElementById("thirdShiny");
  spanHoennShiny.addEventListener("click", renderThirdGenerationShiny);

  let deletar = document.getElementById("deletar");
  deletar.addEventListener("click", removerConteudo);
});

const loader = document.querySelector("#loading");

//botao ir pro topo
//Get the button:
mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//remover cards

function removerConteudo() {
  displayLoading();
  document.getElementById("poke-container").innerHTML = "";
  hideLoading();
  aux = false;
  count = 10;
  page = 0;
  page2 = 151;
  page3 = 251;
  aux = false;
  aux2 = 0;
}

// loading

function displayLoading() {
  loader.classList.add("display");
}

function hideLoading() {
  loader.classList.remove("display");
}
// cards
function renderFirstGeneration() {
  removerConteudo();
  displayLoading();
  document.getElementById("lista").style.pointerEvents = "none";
  setTimeout(() => {
    fetchFirstGeneration(10, 0);
    setTimeout(function () {
      document.getElementById("lista").style.pointerEvents = "auto";
    }, 3000);
  }, 1500);
}

function renderFirstGenerationShiny() {
  removerConteudo();
  displayLoading();
  document.getElementById("lista").style.pointerEvents = "none";
  setTimeout(() => {
    fetchFirstGenerationShiny(10, 0);
    setTimeout(function () {
      document.getElementById("lista").style.pointerEvents = "auto";
    }, 3000);
  }, 1500);
}

function renderSecondGeneration() {
  removerConteudo();
  displayLoading();
  document.getElementById("lista").style.pointerEvents = "none";
  setTimeout(() => {
    fetchSecondGeneration(10, 151);
    setTimeout(function () {
      document.getElementById("lista").style.pointerEvents = "auto";
    }, 3000);
  }, 1500);
}

function renderSecondGenerationShiny() {
  removerConteudo();
  displayLoading();
  document.getElementById("lista").style.pointerEvents = "none";
  setTimeout(() => {
    fetchSecondGenerationShiny(10, 151);
    setTimeout(function () {
      document.getElementById("lista").style.pointerEvents = "auto";
    }, 3000);
  }, 1500);
}

function renderThirdGeneration() {
  removerConteudo();
  displayLoading();
  document.getElementById("lista").style.pointerEvents = "none";
  setTimeout(() => {
    fetchThirdGeneration(10, 251);
    setTimeout(function () {
      document.getElementById("lista").style.pointerEvents = "auto";
    }, 3000);
  }, 1500);
}

function renderThirdGenerationShiny() {
  removerConteudo();
  displayLoading();
  document.getElementById("lista").style.pointerEvents = "none";
  setTimeout(() => {
    fetchThirdGenerationShiny(10, 251);
    setTimeout(function () {
      document.getElementById("lista").style.pointerEvents = "auto";
    }, 3000);
  }, 1500);
}

//scroll infinito
var count = 10;
var page = 0;
var page2 = 151;
var page3 = 251;
var aux = false;
var aux2 = 0;
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    switch (aux2) {
      case 1: {
        if (page == 140) {
          page = page + 10;
          count = 1;
          fetchFirstGeneration(count, page);
          break;
        } else if (aux) {
          alert("Fim da 1ª Geração!!");
          break;
        } else {
          count = 10;
          page = page + 10;
          fetchFirstGeneration(count, page);
        }
        break;
      }
      case 2: {
        if (page == 140) {
          page = page + 10;
          count = 1;
          fetchFirstGenerationShiny(count, page);
          break;
        } else if (aux) {
          alert("Fim da 1ª Geração Shiny!!");
          break;
        } else {
          count = 10;
          page = page + 10;
          fetchFirstGenerationShiny(count, page);
        }
        break;
      }
      case 3: {
        if (page2 == 241) {
          page2 = page2 + 10;
          count = 1;
          fetchSecondGeneration(count, page2);
          break;
        } else {
          count = 10;
          page2 = page2 + 10;
          fetchSecondGeneration(count, page2);
        }
        break;
      }
      case 4: {
        if (page2 == 241) {
          page2 = page2 + 10;
          count = 1;
          fetchSecondGenerationShiny(count, page2);
          break;
        } else {
          count = 10;
          page2 = page2 + 10;
          fetchSecondGenerationShiny(count, page2);
        }
        break;
      }
      case 5: {
        if (page3 == 371) {
          page3 = page3 + 15;
          count = 15;
          fetchThirdGeneration(count, page3);
          break;
        } else if (aux) {
          alert("Fim da 3ª Geração !!");
          break;
        } else {
          count = 10;
          page3 = page3 + 10;
          fetchThirdGeneration(count, page3);
        }
        break;
      }
      case 6: {
        if (page3 == 371) {
          page3 = page3 + 15;
          count = 15;
          fetchThirdGenerationShiny(count, page3);
          break;
        } else if (aux) {
          alert("Fim da 3ª Geração !!");
          break;
        } else {
          count = 10;
          page3 = page3 + 10;
          fetchThirdGenerationShiny(count, page3);
        }
        break;
      }
      default: {
        console.log("default", aux2);
        break;
      }
    }
  }
});

// funções de fetch
function fetchFirstGeneration(count, page) {
  if (page >= 150 && aux == false) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1&offset=150")
      .then(async (response) => await response.json())
      .then(async function (allpokemon) {
        for (let pokemon of allpokemon.results) {
          await fetchPokemonData(pokemon);
        }
      });
    aux = true;
  } else {
    fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=" + count + "&offset=" + page
    )
      .then(async (response) => await response.json())
      .then(async function (allpokemon) {
        for (let pokemon of allpokemon.results) {
          await fetchPokemonData(pokemon);
        }
      });
    aux2 = 1;
  }
}

function fetchFirstGenerationShiny(count, page) {
  if (page >= 150 && aux == false) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1&offset=150")
      .then(async (response) => await response.json())
      .then(async function (allpokemon) {
        for (let pokemon of allpokemon.results) {
          await fetchPokemonDataShiny(pokemon);
        }
      });
    aux = true;
  } else {
    fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=" + count + "&offset=" + page
    )
      .then(async (response) => await response.json())
      .then(async function (allpokemon) {
        for (let pokemon of allpokemon.results) {
          await fetchPokemonDataShiny(pokemon);
        }
      });
    aux2 = 2;
  }
}

function fetchSecondGeneration(count, page) {
  if (page >= 251 && aux == false) {
    aux = true;
    alert("Fim da 2ª Geração!!");
  } else {
    fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=" + count + "&offset=" + page
    )
      .then(async (response) => await response.json())
      .then(async function (allpokemon) {
        for (let pokemon of allpokemon.results) {
          await fetchPokemonData(pokemon);
        }
      });
    aux2 = 3;
  }
}

function fetchSecondGenerationShiny(count, page) {
  if (page >= 251 && aux == false) {
    aux = true;
    alert("Fim da 2ª Geração Shiny!!");
  } else {
    fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=" + count + "&offset=" + page
    )
      .then(async (response) => await response.json())
      .then(async function (allpokemon) {
        for (let pokemon of allpokemon.results) {
          await fetchPokemonDataShiny(pokemon);
        }
      });
    aux2 = 4;
  }
}

function fetchThirdGeneration(count, page) {
  if (page >= 386 && aux == false) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=381")
      .then(async (response) => await response.json())
      .then(async function (allpokemon) {
        for (let pokemon of allpokemon.results) {
          await fetchPokemonData(pokemon);
        }
      });
    aux = true;
  } else {
    fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=" + count + "&offset=" + page
    )
      .then(async (response) => await response.json())
      .then(async function (allpokemon) {
        for (let pokemon of allpokemon.results) {
          await fetchPokemonData(pokemon);
        }
      });
    aux2 = 5;
  }
}

function fetchThirdGenerationShiny(count, page) {
  if (page >= 386 && aux == false) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=381")
      .then(async (response) => await response.json())
      .then(async function (allpokemon) {
        for (let pokemon of allpokemon.results) {
          await fetchPokemonDataShiny(pokemon);
        }
      });
    aux = true;
  } else {
    fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=" + count + "&offset=" + page
    )
      .then(async (response) => await response.json())
      .then(async function (allpokemon) {
        for (let pokemon of allpokemon.results) {
          await fetchPokemonDataShiny(pokemon);
        }
      });
    aux2 = 6;
  }
}

async function fetchPokemonData(pokemon) {
  let url = pokemon.url; // <--- this is saving the pokemon url to a variable to use in the fetch.
  //Example: https://pokeapi.co/api/v2/pokemon/1/"
  await fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      renderPokemon(pokeData);
      hideLoading();
    });
}

async function fetchPokemonDataShiny(pokemon) {
  let url = pokemon.url; // <--- this is saving the pokemon url to a variable to use in the fetch.
  //Example: https://pokeapi.co/api/v2/pokemon/1/"
  await fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      renderPokemonShiny(pokeData);
      hideLoading();
    });
}

function renderPokemon(pokeData) {
  let allPokemonContainer = document.getElementById("poke-container");
  let pokeContainer = document.createElement("div"); //div will be used to hold the data/details for indiviual pokemon.{}
  pokeContainer.classList.add("ui", "card");

  createPokeImage(pokeData, pokeContainer);

  let pokeName = document.createElement("h4");
  pokeName.innerText = pokeData.name;
  pokeName.innerText =
    pokeName.innerText.charAt(0).toUpperCase() + pokeName.innerText.slice(1);

  let pokeNumber = document.createElement("p");
  pokeNumber.innerHTML = `#<strong>${pokeData.id}</strong>`;

  let pokeTypes = document.createElement("ul"); //ul list will hold the pokemon types

  createTypes(pokeData.types, pokeTypes); // helper function to go through the types array and create li tags for each one

  pokeContainer.append(pokeName, pokeNumber, pokeTypes); //appending all details to the pokeContainer div
  allPokemonContainer.appendChild(pokeContainer); //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function renderPokemonShiny(pokeData) {
  let allPokemonContainer = document.getElementById("poke-container");
  let pokeContainer = document.createElement("div"); //div will be used to hold the data/details for indiviual pokemon.{}
  pokeContainer.classList.add("ui", "card");

  createPokeImageShiny(pokeData, pokeContainer);

  let pokeName = document.createElement("h4");
  pokeName.innerText = pokeData.name;
  pokeName.innerText =
    pokeName.innerText.charAt(0).toUpperCase() +
    pokeName.innerText.slice(1) +
    " Shiny";

  let pokeNumber = document.createElement("p");
  pokeNumber.innerHTML = `#<strong>${pokeData.id}</strong>`;

  let pokeTypes = document.createElement("ul"); //ul list will hold the pokemon types

  createTypes(pokeData.types, pokeTypes); // helper function to go through the types array and create li tags for each one

  pokeContainer.append(pokeName, pokeNumber, pokeTypes); //appending all details to the pokeContainer div
  allPokemonContainer.appendChild(pokeContainer); //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function createTypes(types, ul) {
  types.forEach(function (type) {
    let typeLi = document.createElement("li");
    typeLi.innerText = type["type"]["name"];
    ul.append(typeLi);
  });
}

function checkTypes(types, ul) {
  types.forEach(function (type) {
    let types = document.createElement("li");
    typeLi.innerText = types["type"]["name"];
    return "type";
  });
}

function createPokeImage(pokeID, containerDiv) {
  let pokeImgContainer = document.createElement("div");
  pokeImgContainer.classList.add("image");

  if (pokeID.types[0].type.name == "grass") {
    pokeImgContainer.classList.add("grama");
  } else if (pokeID.types[0].type.name == "fire") {
    pokeImgContainer.classList.add("fogo");
  } else if (pokeID.types[0].type.name == "water") {
    pokeImgContainer.classList.add("agua");
  } else if (pokeID.types[0].type.name == "poison") {
    pokeImgContainer.classList.add("veneno");
  } else if (pokeID.types[0].type.name == "normal") {
    pokeImgContainer.classList.add("normal");
  } else if (pokeID.types[0].type.name == "electric") {
    pokeImgContainer.classList.add("raio");
  } else if (
    pokeID.types[0].type.name == "ground" ||
    pokeID.types[0].type.name == "rock"
  ) {
    pokeImgContainer.classList.add("terra");
  } else if (pokeID.types[0].type.name == "bug") {
    pokeImgContainer.classList.add("inseto");
  } else if (pokeID.types[0].type.name == "psychic") {
    pokeImgContainer.classList.add("psiquico");
  } else if (pokeID.types[0].type.name == "fairy") {
    pokeImgContainer.classList.add("fada");
  } else if (pokeID.types[0].type.name == "fighting") {
    pokeImgContainer.classList.add("lutador");
  } else if (pokeID.types[0].type.name == "ghost") {
    pokeImgContainer.classList.add("fantasma");
  } else if (pokeID.types[0].type.name == "dragon") {
    pokeImgContainer.classList.add("dragao");
  } else if (pokeID.types[0].type.name == "ice") {
    pokeImgContainer.classList.add("gelo");
  }

  let pokeImage = document.createElement("img");
  pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID.id}.png`;

  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
}

function createPokeImageShiny(pokeID, containerDiv) {
  let pokeImgContainer = document.createElement("div");
  pokeImgContainer.classList.add("image");

  if (pokeID.types[0].type.name == "grass") {
    pokeImgContainer.classList.add("grama");
  } else if (pokeID.types[0].type.name == "fire") {
    pokeImgContainer.classList.add("fogo");
  } else if (pokeID.types[0].type.name == "water") {
    pokeImgContainer.classList.add("agua");
  } else if (pokeID.types[0].type.name == "poison") {
    pokeImgContainer.classList.add("veneno");
  } else if (pokeID.types[0].type.name == "normal") {
    pokeImgContainer.classList.add("normal");
  } else if (pokeID.types[0].type.name == "electric") {
    pokeImgContainer.classList.add("raio");
  } else if (
    pokeID.types[0].type.name == "ground" ||
    pokeID.types[0].type.name == "rock"
  ) {
    pokeImgContainer.classList.add("terra");
  } else if (pokeID.types[0].type.name == "bug") {
    pokeImgContainer.classList.add("inseto");
  } else if (pokeID.types[0].type.name == "psychic") {
    pokeImgContainer.classList.add("psiquico");
  } else if (pokeID.types[0].type.name == "fairy") {
    pokeImgContainer.classList.add("fada");
  } else if (pokeID.types[0].type.name == "fighting") {
    pokeImgContainer.classList.add("lutador");
  } else if (pokeID.types[0].type.name == "ghost") {
    pokeImgContainer.classList.add("fantasma");
  } else if (pokeID.types[0].type.name == "dragon") {
    pokeImgContainer.classList.add("dragao");
  } else if (pokeID.types[0].type.name == "ice") {
    pokeImgContainer.classList.add("gelo");
  }

  let pokeImage = document.createElement("img");
  pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeID.id}.png`;

  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
}
