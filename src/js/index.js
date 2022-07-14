console.log('You have connected...')

document.addEventListener("DOMContentLoaded", () => {

    let spanKanto = document.getElementById("first")
    spanKanto.addEventListener('click', renderFirstGeneration)

    let spanKantoShiny = document.getElementById("firstShiny")
    spanKantoShiny.addEventListener('click', renderFirstGenerationShiny)

    let spanJohto = document.getElementById("second")
    spanJohto.addEventListener('click', renderSecondGeneration)

    let spanJohtoShiny = document.getElementById("secondShiny")
    spanJohtoShiny.addEventListener('click', renderSecondGenerationShiny)

    let spanHoenn = document.getElementById("third")
    spanHoenn.addEventListener('click', renderThirdGeneration)

    let spanHoennShiny = document.getElementById("thirdShiny")
    spanHoennShiny.addEventListener('click', renderThirdGenerationShiny)

    let deletar = document.getElementById("deletar")
    deletar.addEventListener('click', removerConteudo)

})

const loader = document.querySelector("#loading");

//remover cards

function removerConteudo() {
    displayLoading()
    document.getElementById("poke-container").innerHTML = "";
    hideLoading()
}

// loading

function displayLoading(){
    loader.classList.add("display");
}

function hideLoading(){
    loader.classList.remove("display");
}
// cards
function renderFirstGeneration() {
    removerConteudo();
    displayLoading();
    document.getElementById("lista").style.pointerEvents = 'none';
    setTimeout(() => {
        fetchFirstGeneration();
        setTimeout(function(){
            document.getElementById("lista").style.pointerEvents = 'auto';
        },4000);
    },1500);
}

function renderFirstGenerationShiny() {
    removerConteudo();
    displayLoading();
    document.getElementById("lista").style.pointerEvents = 'none';
    setTimeout(()=> {
        fetchFirstGenerationShiny();
        setTimeout(function(){
            document.getElementById("lista").style.pointerEvents = 'auto';
        },4000);
    },1500);
}

function renderSecondGeneration() {
    removerConteudo();
    displayLoading();
    document.getElementById("lista").style.pointerEvents = 'none';
    setTimeout(() => {
        fetchSecondGeneration();
        setTimeout(function(){
            document.getElementById("lista").style.pointerEvents = 'auto';
        },4000);
    },1500);
}

function renderSecondGenerationShiny() {
    removerConteudo();
    displayLoading();
    document.getElementById("lista").style.pointerEvents = 'none';
    setTimeout(() => {
        fetchsecondGenerationShiny();
        setTimeout(function(){
            document.getElementById("lista").style.pointerEvents = 'auto';
        },4000);
    },1500);
}

function renderThirdGeneration() {
    removerConteudo();
    displayLoading();
    document.getElementById("lista").style.pointerEvents = 'none';
    setTimeout(() => {
        fetchThirdGeneration();
        setTimeout(function(){
            document.getElementById("lista").style.pointerEvents = 'auto';
        },4000);
    },1500);
}

function renderThirdGenerationShiny() {
    removerConteudo();
    displayLoading();
    document.getElementById("lista").style.pointerEvents = 'none';
    setTimeout(() => {
        fetchThirdGenerationShiny();
        setTimeout(function(){
            document.getElementById("lista").style.pointerEvents = 'auto';
        },4000);
    },1500);
}

function fetchFirstGeneration() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(async response => await response.json())
        .then(function (allpokemon) {
            for (let pokemon of allpokemon.results) {
                fetchPokemonData(pokemon)
            }
        })
}

function fetchFirstGenerationShiny() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(async response => await response.json())
        .then(function (allpokemon) {
            for (let pokemon of allpokemon.results) {
                fetchPokemonDataShiny(pokemon)
            }
        })
}

function fetchSecondGeneration() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151')
        .then(response => response.json())
        .then(function (allpokemon) {
            for (let pokemon of allpokemon.results) {
                fetchPokemonData(pokemon)
            }
        })
}

function fetchSecondGenerationShiny() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151')
        .then(response => response.json())
        .then(function (allpokemon) {
            for (let pokemon of allpokemon.results) {
                fetchPokemonDataShiny(pokemon)
            }
        })
}

function fetchThirdGeneration() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251')
        .then(async response => response.json())
        .then(async function (allpokemon) {
            for (let pokemon of allpokemon.results) {
                fetchPokemonData(pokemon)
            }
        })

}

function fetchThirdGenerationShiny() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251')
        .then(response => response.json())
        .then(function (allpokemon) {
            for (let pokemon of allpokemon.results) {
                fetchPokemonDataShiny(pokemon)
            }
        })
}

function fetchPokemonData(pokemon) {
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. 
    //Example: https://pokeapi.co/api/v2/pokemon/1/"
     fetch(url)
        .then(response => response.json())
        .then(function (pokeData) {
            renderPokemon(pokeData)
            hideLoading()
        })
}

function fetchPokemonDataShiny(pokemon) {
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. 
    //Example: https://pokeapi.co/api/v2/pokemon/1/"
    fetch(url)
        .then(response => response.json())
        .then(function (pokeData) {
            renderPokemonShiny(pokeData)
            hideLoading()
        })
}


function renderPokemon(pokeData) {
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add('ui', 'card');

    createPokeImage(pokeData, pokeContainer);

    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.name
    pokeName.innerText = pokeName.innerText.charAt(0).toUpperCase() + pokeName.innerText.slice(1);

    let pokeNumber = document.createElement('p')
    pokeNumber.innerHTML = `#<strong>${pokeData.id}</strong>`

    let pokeTypes = document.createElement('ul') //ul list will hold the pokemon types

    createTypes(pokeData.types, pokeTypes) // helper function to go through the types array and create li tags for each one

    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer);       //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function renderPokemonShiny(pokeData) {
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add('ui', 'card');

    createPokeImageShiny(pokeData, pokeContainer);

    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.name
    pokeName.innerText = pokeName.innerText.charAt(0).toUpperCase() + pokeName.innerText.slice(1) + " Shiny";

    let pokeNumber = document.createElement('p')
    pokeNumber.innerHTML = `#<strong>${pokeData.id}</strong>`

    let pokeTypes = document.createElement('ul') //ul list will hold the pokemon types


    createTypes(pokeData.types, pokeTypes) // helper function to go through the types array and create li tags for each one

    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer);       //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function createTypes(types, ul) {
    types.forEach(function (type) {
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function checkTypes(types, ul) {
    types.forEach(function (type) {
        let types = document.createElement('li');
        typeLi.innerText = types['type']['name'];
        return 'type'
    })
}

function createPokeImage(pokeID, containerDiv) {

    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image');

    if (pokeID.types[0].type.name == "grass") {
        pokeImgContainer.classList.add('grama')
    } else if(pokeID.types[0].type.name == "fire"){
        pokeImgContainer.classList.add('fogo')
    } else if(pokeID.types[0].type.name == "water"){
        pokeImgContainer.classList.add('agua')
    } else if(pokeID.types[0].type.name == "poison"){
        pokeImgContainer.classList.add('veneno')
    } else if(pokeID.types[0].type.name == "normal"){
        pokeImgContainer.classList.add('normal')
    } else if(pokeID.types[0].type.name == "electric"){
        pokeImgContainer.classList.add('raio')
    } else if(pokeID.types[0].type.name == "ground" || pokeID.types[0].type.name == "rock"){
        pokeImgContainer.classList.add('terra')
    } else if(pokeID.types[0].type.name == "bug"){
        pokeImgContainer.classList.add('inseto')
    } else if(pokeID.types[0].type.name == "psychic"){
        pokeImgContainer.classList.add('psiquico')
    } else if(pokeID.types[0].type.name == "fairy"){
        pokeImgContainer.classList.add('fada')
    } else if(pokeID.types[0].type.name == "fighting"){
        pokeImgContainer.classList.add('lutador')
    } else if(pokeID.types[0].type.name == "ghost"){
        pokeImgContainer.classList.add('fantasma')
    } else if(pokeID.types[0].type.name == "dragon"){
        pokeImgContainer.classList.add('dragao')
    } else if(pokeID.types[0].type.name == "ice"){
        pokeImgContainer.classList.add('gelo')
    }

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID.id}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}


function createPokeImageShiny(pokeID, containerDiv) {
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    if (pokeID.types[0].type.name == "grass") {
        pokeImgContainer.classList.add('grama')
    } else if(pokeID.types[0].type.name == "fire"){
        pokeImgContainer.classList.add('fogo')
    } else if(pokeID.types[0].type.name == "water"){
        pokeImgContainer.classList.add('agua')
    } else if(pokeID.types[0].type.name == "poison"){
        pokeImgContainer.classList.add('veneno')
    } else if(pokeID.types[0].type.name == "normal"){
        pokeImgContainer.classList.add('normal')
    } else if(pokeID.types[0].type.name == "electric"){
        pokeImgContainer.classList.add('raio')
    } else if(pokeID.types[0].type.name == "ground" || pokeID.types[0].type.name == "rock"){
        pokeImgContainer.classList.add('terra')
    } else if(pokeID.types[0].type.name == "bug"){
        pokeImgContainer.classList.add('inseto')
    } else if(pokeID.types[0].type.name == "psychic"){
        pokeImgContainer.classList.add('psiquico')
    } else if(pokeID.types[0].type.name == "fairy"){
        pokeImgContainer.classList.add('fada')
    } else if(pokeID.types[0].type.name == "fighting"){
        pokeImgContainer.classList.add('lutador')
    } else if(pokeID.types[0].type.name == "ghost"){
        pokeImgContainer.classList.add('fantasma')
    } else if(pokeID.types[0].type.name == "dragon"){
        pokeImgContainer.classList.add('dragao')
    } else if(pokeID.types[0].type.name == "ice"){
        pokeImgContainer.classList.add('gelo')
    }


    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeID.id}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}