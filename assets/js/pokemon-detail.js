import pokeApi from "./poke-api.js";


async function getPokemonfromURl() {

}
const searchString = location.search;
const [_,searchPokemon] = searchString.slice(1).split("=");

const url = 'https://pokeapi.co/api/v2/pokemon'
const pokemon = await pokeApi.getPokemonDetail(`${url}/${searchPokemon}`)
// await document.querySelector('span').setAttribute('image-pokemon', pokemon.image);



        console.log(pokemon.image);
        document.querySelector('.content-detail').setAttribute('data-content', `url(${pokemon.image})`);
