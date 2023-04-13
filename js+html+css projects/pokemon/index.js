import { fetch } from "./backend/backend.js";

const getPokemon = async () => {
    const response = await fetch("http://pokemon.com");
    const data = await response.json();

    return data;
}

//<div class="pokemon-item">
// * <span>Blastoise</span> 
// </div>

const attachPokemons = (pokemons) => {
    const pokemonList = document.getElementById("pokemon-list");

    for(let pokemon of pokemons) {
        const pokemonDiv = document.createElement("div");
        pokemonDiv.classList.add("pokemon-item");

        const pokemonSpan = document.createElement("span");
        pokemonSpan.innerText = pokemon.name;

        pokemonDiv.appendChild(pokemonSpan);
        pokemonList.appendChild(pokemonDiv);


        pokemonDiv.addEventListener("click", () => {
            
        })
    }
}

const displayPokemon = async () => {
    const pokemons = await getPokemon();
    attachPokemons(pokemons);
}

displayPokemon();