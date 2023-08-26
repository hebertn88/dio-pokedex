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
    .then(() => {
        const pokeCard = document.querySelectorAll('.pokemon');
        [...pokeCard].map(card => card.addEventListener('click', clickOnCardPokemon));
    })
}


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



function clickOnCardPokemon(card) {
    const isDivPokemon = card.target.classList.contains('pokemon');
    const isElementChild = card.target.parentElement.closest('.pokemon');
    const pokemon = isDivPokemon ? isDivPokemon : isElementChild;
    const pokemonName = pokemon.querySelector('.name').innerHTML;

    location.assign(location.protocol + "//" + location.hostname + ':' + location.port + `/pokemon-detail.html?pokemon=${pokemonName}`);
}

