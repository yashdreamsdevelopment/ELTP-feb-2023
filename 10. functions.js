
// non parameterized
// non returning 
// traditional function
function greet() {
    console.log('helloo');
}

greet; // reference to the function
greet(); // executes the function

function greetPerson(name) {
    console.log(`helooo ${name}`);
}

greetPerson(); // works, passes undefined as the params
greetPerson('abcd');
greetPerson('abcd', 'pqrs');

function tooManyParameters(...params) {
    console.log(params)
}

tooManyParameters(1, 2, 3, 4, 5, 5);

function getGreeting() {
    return 'Hi';

    console.log('returned hi');
}

let greeting = getGreeting(); // 'Hi'

function createGreeting(name, age) {
    return `Hello, ${name} you are ${age} old`;
}

greeting = createGreeting('aniruddha', 29);


// function expressions
const add = function (n1, n2) {
    return n1 + n2;
}

add; // reference
add(); // executing

// IIFE
const pow = (function(n) {
    return n ** 2;
})(5);


// arrow function
// if only one parameter omit ()
// if only one statement omit {}
// return does not need to be written explicitly
const subtractFive = n => n - 5;
x => x ** 2;
n => n.toUpperCase();