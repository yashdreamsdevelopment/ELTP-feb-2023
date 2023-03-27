// infers the datatype from the value
let positiveNumber = 5;
// positiveNumber = 'abcd'; 
// number can accept only 'number' values

let primeNumber; 
// no datatype associated = any
// can assign any value to it.
primeNumber = 7;
console.log(primeNumber)
primeNumber = 'abcd';
console.log(primeNumber);

// assign the datatype number to negativeNumber
let negativeNumber: number;
negativeNumber = -7;
// negativeNumber = 'abcd';

let string: string;
let altString = '';
let bool: boolean;
let altBool = false;
let undef: undefined;
let altUndef = undefined; 
let nullish: null;
let altNullish = null;
let any: any; // WE NEVER EVER DO THIS.
let altAny;
let unknown: unknown;
let never: never;

// union types
let array: (string | number)[] = [];
array.push("9");

type AlphaNumeric = string | number | boolean;
let emails: AlphaNumeric[] = [];
let email: AlphaNumeric;

let apiValue: boolean = false;
array.push(apiValue);

type TPerson = { name: string, age: number, address?: string };

const person: Person = {
    name: "Aniruddha",
    age: 30,
    address: "Pune"
}

interface IPerson {
    name: string;
    age: number;
    address?: string;
}

class Person {
    name: string;
    age: number;
    address?: string;
}

let p: {
    [key: string]: any,
} = {};

p.address = "abcd";

type NumberArr = number[];
type Matrix = Person[];

const matrix: Matrix = [
    [1],
    [1],
    [1]
];
