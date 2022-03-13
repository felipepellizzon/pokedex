/*
quando clicar no card na listagem, esconde o q está mostrando e mostra o que foi clicado

trabalhar com dois elementos
1- listagem
2- cartao do pokemon

criar duas variaveis no js para trabalhar com os elementos da tela

trabalhar com o clique do usuario na lista

-remover a classe aberto so do cartao que esta aberto
-ao clicar em um pokemon da listagem pegamos o id para saber qual cartao mostrar
-removar a classe ativo que marca o pokemon selecionado
-adicionar classe ativo no item selecionado

*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click',() => {
        //remover a classe aberto do cartao
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // clicar num pokemon para pegar o id dele
        const idPokemonSelecionado = pokemon.attributes.id.value

        //adicionar a classe aberto no cartao escolhido
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado 
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo do pokemon na lista
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //add a classe ativo no pokemon escolhido na lista
        const pokemonSelecionaNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionaNaListagem.classList.add('ativo')

    })
})
