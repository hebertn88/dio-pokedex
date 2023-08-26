import Pokemon from "./pokemon-model.js";

const pokeApi = {};

function pokeApiDetailtoModel(detail) {
    const pokemon = new Pokemon(
        detail.id,
        detail.name,
        (detail.types).map(type => type.type.name),
        (detail.sprites.other["official-artwork"].front_default)
    );  
    return pokemon;
}

pokeApi.getPokemonDetail = async (pokemon) => {
    return fetch(pokemon.url)
        .then(response => response.json())
        .then(detail => pokeApiDetailtoModel(detail))
        .catch(error => console.log(error));
}

pokeApi.getPokemonList = async (url, limit, offset) => {
    return fetch(`${url}?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(data => data.results)
        .then(pokemons => pokemons.map(pokeApi.getPokemonDetail))
        .then(responseDetail => Promise.all(responseDetail))
        .then(detail => detail)
        .catch(error => console.log(error))
}
  

export default pokeApi;