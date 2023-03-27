// commonjs way of importing
// const utility = require("./utility");
// const { add, diff } = require("./utility");
// cannot destructure default exports directly
// import utility from "./utility";
// const { add, diff } = utility;
import anything, { add as sum } from "./utility.js";
import randomWord from 'random-words';
import { json, Router } from 'express';

// anything();

const random = randomWord();
console.log(random);
console.log("running from node");

const addition = sum(5, 7);
// const difference = diff(10, 8);

console.log(addition, difference);