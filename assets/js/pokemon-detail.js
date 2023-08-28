import PokeApi from "./poke-api.js";
import Pokemon from "./pokemon-model.js";
import PokeHTML from "./pokemon-html.js";

const url = 'https://pokeapi.co/api/v2/pokemon'
const api = new PokeApi(url);

async function getPokemonfromURl() {
    const [_,searchPokemon] = (location.search).slice(1).split("=");
    const pokemonDetail = await api.getPokemonDetail(`${url}/${searchPokemon}`);
    return new Pokemon(pokemonDetail);
}

const pokemon = await getPokemonfromURl();

const btnBack = document.querySelector('button.back-button');
btnBack.addEventListener('click', () => {
    location.assign(location.protocol + "//" + location.hostname + ':' + location.port + `/index.html`);
})

loadPokemonDetails(pokemon);

function loadPokemonDetails(pokemon) {
    const elBackground = document.querySelector('div.background');
    elBackground.classList.add(pokemon.type);

    const elName = document.querySelector('h1.name');
    elName.innerHTML = pokemon.name;

    const elNumber = document.querySelector('span.number');
    elNumber.innerHTML = '#' + String(pokemon.number).padStart(3,'0');
    
    const elTypes = document.querySelector('ol.types');
    PokeHTML.createTypesHTML(pokemon.types).map(type => elTypes.appendChild(type));
    
    const elImg = document.querySelector('.content-detail img');
    elImg.setAttribute('src', pokemon.image);
    elImg.setAttribute('alt', pokemon.name);

    const elType = document.querySelector('.attributes span.type');
    elType.innerHTML = `${pokemon.type}`;

    const elHeight = document.querySelector('.attributes span.height');
    elHeight.innerHTML = `${pokemon.height}"`;

    const elWeight = document.querySelector('.attributes span.weight');
    elWeight.innerHTML = `${pokemon.weight} lbs`;

    const elMoves = document.querySelector('.attributes span.moves');
    elMoves.innerHTML = `${pokemon.getNMoves(5).map(i => i).join(', ')}`;

    const elAbilities = document.querySelector('.attributes span.abilities');
    elAbilities.innerHTML = `${pokemon.getNAbilities(5).map(i => i).join(', ')}`;
}

const [...elTabs] = document.querySelectorAll('.attributes a');
elTabs.map(e => e.addEventListener('click', togleTabs));

function togleTabs(e) {
    const data = document.querySelector('.attributes div.data');
    const comingSoon = document.querySelector('.attributes div.coming-soon');

    if (e.target.innerHTML === 'About') {
        data.style.display = 'grid';
        comingSoon.style.display = 'none';
    } else {
        data.style.display = 'none';
        comingSoon.style.display = 'block';
    }

}











