// commonjs way of importing
// const utility = require("./utility");
// const { add, diff } = require("./utility");
// cannot destructure default exports directly
// import utility from "./utility";
// const { add, diff } = utility;
import utility, { add } from "./utility.js";
utility();

console.log("running from node");

const addition = add(5, 7);
const difference = diff(10, 8);

console.log(addition, difference);