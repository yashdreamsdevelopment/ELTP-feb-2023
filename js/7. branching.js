
if(/** condition */ true) {
    // code runs if condition is true
}

const age = 27;
const thirdFloorThreshold = 25;
const secondFloorThreshold = 18;

if(age >= thirdFloorThreshold) {
    console.log("allowed on third floor");
} else if (age >= secondFloorThreshold) {
    console.log("allowed on second floor");
} else {
    console.log("kids drink your milk");
}

const chosenPokemon = 'charizard';

switch(chosenPokemon) {
    case 'pikachu':
        console.log('I choose you Pikachu');
        break;
    case 'charizard':
        console.log('go get them Charizard');
        break;
    case 'venasaur':
        console.log('dont lose');
        break;
    default:
        console.log('you dont have this pokemon');
}
