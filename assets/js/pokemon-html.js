export default class PokeHTML {
    static createCardHTML = (pokemon) => {
        const liPokemon = this.createElementHTML('li', ['pokemon', pokemon.type]);
    
        // header
        const divHeader = this.createElementHTML('div', ['header']);
        
        const spamNumber = this.createElementHTML('spam', ['number'],
            `#${String(pokemon.number).padStart(3,'0')}`);
    
        const spamName = this.createElementHTML('spam', ['name'], pokemon.name);
        
        divHeader.appendChild(spamNumber);
        divHeader.appendChild(spamName);
        
        // detail
        const divDetail = this.createElementHTML('div', ['detail']);
        
        const olTypes = this.createElementHTML('ol', ['types']);
        
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
        return types.map(type => this.createElementHTML(
            'li', ['type', type], type))
    }

    static createElementHTML = (type, classList = [], innerText = "") => {
        const element = document.createElement(type);

        if (classList != "") classList.map(c => element.classList.add(c));
        if (innerText != "") element.innerText = innerText;
        
        return element;
    }
}