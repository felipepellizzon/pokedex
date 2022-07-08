console.log('You have connected...')

document.addEventListener("DOMContentLoaded", () =>{


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

async function renderFirstGeneration(){
    removerConteudo();
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    await fetchFirstGeneration();
}

async function renderFirstGenerationShiny(){
    removerConteudo();
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    await fetchFirstGenerationShiny();
}

async function renderSecondGeneration(){
    removerConteudo();
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerHTML="";
    await fetchSecondGeneration();
}

async function renderSecondGenerationShiny(){
    removerConteudo();
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerHTML="";
    await fetchSecondGenerationShiny();
}

async function renderThirdGeneration(){
    removerConteudo();
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerHTML="";
    await fetchThirdGeneration();
}

async function renderThirdGenerationShiny(){
    removerConteudo();
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerHTML="";
    await fetchThirdGenerationShiny();
}

async function fetchFirstGeneration(){
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(async response => await response.json())
    .then(async function(allpokemon){
        for (let pokemon of allpokemon.results){
            await fetchPokemonData(pokemon)
        }
    })
}

async function fetchFirstGenerationShiny(){
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(async response => await response.json())
    .then(async function(allpokemon){
        for (let pokemon of allpokemon.results){
            await fetchPokemonDataShiny(pokemon)
        }
    })
}

async function fetchSecondGeneration(){
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151')
    .then(async response => await response.json())
    .then(async function(allpokemon){
        for (let pokemon of allpokemon.results){
            await fetchPokemonData(pokemon)
        }
    })
}

async function fetchSecondGenerationShiny(){
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151')
    .then(async response => await response.json())
    .then(async function(allpokemon){
        for (let pokemon of allpokemon.results){
            await fetchPokemonDataShiny(pokemon)
        }
    })
}

async function fetchThirdGeneration(){
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251')
    .then(async response => await response.json())
    .then(async function(allpokemon){
        for (let pokemon of allpokemon.results){
            await fetchPokemonData(pokemon)
        }
    })
    
}

async function fetchThirdGenerationShiny(){
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251')
    .then(async response => await response.json())
    .then(async function(allpokemon){
        for (let pokemon of allpokemon.results){
            await fetchPokemonDataShiny(pokemon)
        }
    })
}

async function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. 
                                //Example: https://pokeapi.co/api/v2/pokemon/1/"
    await fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
    })
}

async function fetchPokemonDataShiny(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. 
                                //Example: https://pokeapi.co/api/v2/pokemon/1/"
    await fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemonShiny(pokeData)
    })
}


function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add('ui', 'card');

    createPokeImage(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4') 
    pokeName.innerText = pokeData.name
    pokeName.innerText = pokeName.innerText.charAt(0).toUpperCase() + pokeName.innerText.slice(1);

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`
   
    let pokeTypes = document.createElement('ul') //ul list will hold the pokemon types
  

    createTypes(pokeData.types, pokeTypes) // helper function to go through the types array and create li tags for each one
    typeColor(pokeContainer,pokeTypes)

    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer);       //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function renderPokemonShiny(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add('ui', 'card');

    createPokeImageShiny(pokeData.id, pokeContainer);

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

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function checkTypes(types, ul){
    types.forEach(function(type){
        let types = document.createElement('li');
        typeLi.innerText = types['type']['name'];
        return 'type'
    })
}

function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`

    pokeImgContainer.classList.add(typeColor())

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

function typeColor(containerDiv, type){

}

function createPokeImageShiny(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}


function removerConteudo(){
    document.getElementById("poke-container").innerHTML = "";
}