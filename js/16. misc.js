// hoisting

const firstname = "abcd";
console.log(firstname);

const example = () => {
    const number = 10;
}

example();

for(let i = 0; i < 2; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}
// console.log(i);

