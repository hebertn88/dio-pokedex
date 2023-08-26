import pokeApi from "./poke-api.js";
import Pokemon from "./pokemon-model.js";

const url = 'https://pokeapi.co/api/v2/pokemon';
let limit = 9;
let offset = 0;
const maxPokemons = 151

const pokemonList = document.querySelector('#pokemons');
const btnLoadMore = document.querySelector('.paginator button')

async function loadPokemons(url, limit, offset) {
    pokeApi.getPokemonList(url, limit, offset)
    .then((pokemons = []) => {
        pokemons.map(pokemon => pokemonList.appendChild(Pokemon.createCardHTML(pokemon)));
    })
}10

btnLoadMore.addEventListener('click', () => {
    offset += limit;
    if ((offset + limit) >= maxPokemons) {
        limit = maxPokemons - offset;
        loadPokemons(url, limit, offset);
        btnLoadMore.parentElement.removeChild(btnLoadMore);
    } else {
        loadPokemons(url, limit, offset);
    }
})

loadPokemons(url, limit, offset);

