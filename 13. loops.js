// for
const sentence = 'this is a sentence';
const people = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];
const person = { name: 'D', age: 40 };

// traditional loop
for(let index = 0; index < sentence.length; index++) {
    const char = sentence[index];
    console.log(char);
}

for(let index = 0; index < people.length; index++) {
    const person = people[index];
    console.log(person);
}

const keys = Object.keys(person);
// ['name', 'age']
for(let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const value = person[key];
    console.log(value);
}

// for in loop
// create the index/key for us
for(let index in sentence) {
    const char = sentence[index];
    console.log(char);
}

for(let index in people) {
    const person = people[index];
    console.log(person);
}

for(let key in person) {
    const value = person[key];
    console.log(value);
}


// for of loop
// DOES NOT WORK ON OBJECTS
for(let char of sentence) {
    console.log(char);
}

for(let person of people) {
    console.log(person);
}

for(let { name, age} of people) {
    console.log(name, age);
}

// while

let index = 0;
while(index < sentence.length) {
    const char = sentence[index];

    console.log(char);
    index++;
}