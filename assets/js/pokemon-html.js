export default class PokeHTML {
    static createCardHTML = (pokemon) => {
        const liPokemon = document.createElement('li');
        liPokemon.classList.add('pokemon', pokemon.type);
    
        // header
        const divHeader = document.createElement('div');
        divHeader.classList.add('header');
        
        const spamNumber = document.createElement('spam');
        spamNumber.classList.add('number');
        spamNumber.innerText = '#' + String(pokemon.number).padStart(3,'0');
    
        const spamName = document.createElement('spam');
        spamName.classList.add('name');
        spamName.innerText = pokemon.name;
        
        divHeader.appendChild(spamNumber);
        divHeader.appendChild(spamName);
        
        // detail
        const divDetail = document.createElement('div');
        divDetail.classList.add('detail');
        
        const olTypes = document.createElement('ol');
        olTypes.classList.add('types');
        
        this.createTypesHTML(pokemon.types).map(type => olTypes.appendChild(type));
        
        const img = document.createElement('img');
        img.src = pokemon.image;
        
        divDetail.appendChild(olTypes);
        divDetail.appendChild(img);
    
        liPokemon.appendChild(divHeader);
        liPokemon.appendChild(divDetail);
        return liPokemon;
    };

    static createTypesHTML = (types) => {
        const typesList = types.map(type => {
            const liType = document.createElement('li');
            liType.classList.add('type', type);
            liType.innerText = type;
            return liType;
        })
        return typesList;
    }
}