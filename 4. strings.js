const name = 'Suyash';
const greeting = 'Hellooooo';

// concatenate/merge/join strings
// old way +
let fullGreeting = greeting + ", " + name; 
// Hellooooo, Suyash


// the new way --> RECOMMENDED WAY
fullGreeting = `${greeting}, ${name}`;

// index      0123
const word = "food";
// length = 4
word[10]; // undefined
word[0]; // f

const length = word.length; 
// 4

// STRINGS ARE IMMUTABLE
const anotherWord = 'noose';
anotherWord[0]; // n
anotherWord[0] = 'p';

// string methods
word.toUpperCase(); // NOSE
word.toLowerCase(); // nose
word.includes('o'); // true
word.includes('os'); // true
word.indexOf('o'); // 1
word.lastIndexOf('o'); // 2

const email = '          am. gamol.com ';
email.trim(); // am. gamol.com

const csvRow = '1***|***Aniruddha|12456890|coditas, pune 4';
csvRow.split('***|***'); 
// ['1','Aniruddha', '12456890', 'pune', 'coditas, pune 4'];

word.replace('n', 'p'); // pose
