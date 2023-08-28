export default class Pokemon {

    constructor(pokemonDetail) {
        this.number = pokemonDetail.id;
        this.name = pokemonDetail.name;
        [...this.types] = pokemonDetail.types.map(i => i.type.name);
        this.type = this.types[0];
        this.image = pokemonDetail.sprites.other["official-artwork"].front_default;
        this.height = pokemonDetail.height;
        this.weight = pokemonDetail.weight;
        [...this.abilities] = pokemonDetail.abilities.map(i => i.ability.name);
        [...this.moves] = pokemonDetail.moves.map(i => i.move.name);
    }

    get url() {
        return `https://pokeapi.co/api/v2/pokemon/${this.name}`;
    }

    getNAbilities = (n) => {
        return this.abilities.length > n ? this.abilities.slice(0,n) : this.abilities;
    }

    getNMoves = (n) => {
        return this.moves.length > n ? this.moves.slice(0,n) : this.moves;
    }

}