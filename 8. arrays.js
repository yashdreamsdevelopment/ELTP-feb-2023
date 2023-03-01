//               0   1   2   3   4
const numbers = [10, 20, 30, 40, 50];

// access elements
numbers[2]; // 30
numbers[4]; // 50

// numbers[3] = 41; 
// we can do this because arrays are stored as references
// so const array can be mutated but not reassigned.

numbers[100]; // undefined

// property
const length = numbers.length; // 5

// methods
// add elements
// push
numbers.push(60);
// [10, 20, 30, 40, 50, 60];
// -> 6 new length of the array

// unshift
numbers.unshift(0);
// [0, 10, 20, 30, 40, 50, 60];
// -> 7 new length of the array

// splice
// 3 = starting index
// 0 = number elements to delete
// 22, 23, 24, 25 = elements to add
numbers.splice(3, 0, 22, 23, 24, 25);
// [0, 10, 20, 22, 23, 24, 25 30, 40, 50, 60];
// -> [] = array of deleted elements


// remove elements
numbers.pop();
// [0, 10, 20, 22, 23, 24, 25 30, 40, 50];
// -> 60 = popped of element

numbers.shift();
// [10, 20, 22, 23, 24, 25 30, 40, 50];
// -> 0 = shifted element

numbers.splice(2, 4);
// [10, 20, 30, 40, 50];
// -> [22, 23, 24, 25] 


// add and delete at the same time
numbers.splice(3, 1, 45);
// [10, 20, 30, 45, 50];
// -> [40] 

// map, filter, reduce, foreach, find, findIndex -> come back after learning callbacks

numbers.includes(50); // true
numbers.includes(100); // false

// original array remains untouched in slice
// p1 = starting index
numbers.slice(); 
// [10, 20, 30, 45, 50]; a new array

const shrutisFriends = ["Sharvari", "Sudheer", "Arya"];
const sakshisFriends = shrutisFriends; 
// copying the reference

sakshisFriends.push("Abhishek");
const robinsFriends = shrutisFriends.slice();
// cloned
robinsFriends.push("Aniruddha");


const subarnasFriends = [
    { name: "Rifshah", contact: 1234567890 },
    { name: "Shubham", contact: 0964323242 },
]

const samruddhisFriends = subarnasFriends.slice();
// SLICE CREATES A SHALLOW CLONE
samruddhisFriends.push({ name: "pranav", contact: 109840912 });
subarnasFriends[0].contact = 9874326983247;


const computer = ["16GB", "i7 10th gen", "Lenovo"];
// const { 0: pow, 1: p, 2: c } = computer;
// const ram = computer[0];
// const processor = computer[1];
// const company = computer[2];

// destructure
const [ram, processor, company] = computer;
const { 0: pow, 1: p, 2: c } = computer;
const [, , make] = computer;

// ... rest operator
const [power, ...restOfTheElements] = computer;
// restOfTheElements = ["i7 10th gen", "Lenovo"]

// ... spread operator
// const computerClone = computer.slice()
const computerClone = [...computer];