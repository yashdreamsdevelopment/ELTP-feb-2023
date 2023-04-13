import { pokemons } from "./pokemon.data.js";

export const fetch = (url, options = {}) => {
    return new Promise((resolve, reject) => {
        const duration = Math.random() * 4000;
        
        setTimeout(() => {
            resolve({ 
                json: function() {
                    return new Promise((resolve, reject) => {
                        resolve(pokemons)
                    })
                }
            });
        }, duration)
    });
}