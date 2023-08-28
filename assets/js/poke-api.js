export default class PokeApi {
    constructor(
        url,
        limit = 9,
        offset = 0
        ) {
            this.url = url;
            this.limit = limit;
            this.offset = offset
        }

    fetchPokemon = async (url = this.url, limit = this.limit, offset = this.offset) => {
        return fetch(`${url}?limit=${limit}&offset=${offset}`)
            .then(response => response.json())
            .then(data => data.results)
            .catch(error => console.log(error))
    }

    getPokemonDetail = async (url) => {
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    fetchPokemonWithDetail = async (url = this.url, limit = this.limit, offset = this.offset) => {
        return this.fetchPokemon(url, limit, offset)
            .then(resp => resp.map(
                poke => this.getPokemonDetail(poke.url)
            ))
            .then(pokeDetail => Promise.all(pokeDetail));
    }
};