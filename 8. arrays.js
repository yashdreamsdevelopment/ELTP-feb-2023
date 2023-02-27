//               0   1   2   3   4
const numbers = [10, 20, 30, 40, 50];

// access elements
numbers[2]; // 30
numbers[4]; // 50

numbers[3] = 41; 
// we can do this because arrays are stored as references
// so const array can be mutated but not reassigned.