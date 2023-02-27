// numbers
const integer = 10;
const decimal = 10.5;
const negative = -10;

typeof integer; // 'number'
console.log(typeof decimal);

// strings
// a-z, A-Z, 0-9, `~@#$%^&*() 
// enclosed in '', "" or ``
const singleQuotedString = 'blah"` blah blah \n';
const doubleQuotedString = "blah'` blah blah\n";
const backTickedString = `back"' ticked string\n`;

// booleans
const isCold = true;
const isSunny = true;
const isSmart = false;

// undefined
const brains = undefined; // DO NOT DO THIS EVER.

// null -> pseudo data type
const career = null; // NEVER DO THIS.
typeof career; // object

// arrays
// elements (of any datatype), separated by commas
// enclosed in []
const integers = [1, 2, 3, 4];
const personArr = [
    "Aniruddha", 
    22, 
    false, 
    undefined,
    null,
    [1, 2, 3],
    { city: "PUNE", country: "IN" }
];

// object
// key: value pairs
// separated by commas
// enclosed in {}
const person = {
    name: "Aniruddha",
    age: 22,
    hadLunch: false,
    brains: undefined,
    accountBalance: null,
    friends: ["A", "B", "C"],
    location: {
        city: "Pune",
        country: "IN"
    }
}

// function
function greet() {
    console.log('hi');
}

typeof greet; // function