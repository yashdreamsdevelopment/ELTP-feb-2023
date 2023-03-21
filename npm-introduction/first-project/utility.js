// named export in "module" type
export const add = (n1, n2) => n1 + n2;
export const diff = (n1, n2) => n1 - n2;

// commonjs way to export
// 1
// module.exports = {
//     add,
//     diff
// }

export default function() {
    console.log("the default export of the utlity file");
}

// ONLY ONE DEFAULT EXPORT IN ONE FILE.
// export default {
//     add,
//     diff
// }