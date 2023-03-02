// function reference passed as a parameter is a callback
const greetHR = () => 'hi HR';
const greetEmployee = () => 'hey Employee';

const greet = (callback) => {
    // callback is a reference to a function
    const message = callback();
    console.log(message);
}

const role = 'Employee'; // we get role dynamically

if(role === 'HR') {
    greet(greetHR);
} else {
    greet(greetEmployee);
}

// modifyArray([11, 22, 33], (n, i) => n ** (i + 1));
const modifyArray = (array, modifierFn) => {
    // array = [11, 22, 33],
    // modifierFn = (n, i) => n ** (i + 1)
    // n = 33, i = 2 => 35937

    const modifiedArray = [];
    // [11, 484, 35937]
    
    for(let index = 0; index < array.length; index++) {
        // index = 2
        const element = array[index];
        // element = 33
        const modifiedElement = modifierFn(element, index);
        // modifiedElement = 35937
        modifiedArray.push(modifiedElement);
    }

    return modifiedArray;
}

modifyArray([1, 2, 3, 4], n => n ** 2);
modifyArray([3, 6, 18, 24], n => n + 10);
modifyArray(['a', 'b', 'c', 'd'], s => s.toUpperCase());
modifyArray([10, 20, 30, 40], n => n.toString());
modifyArray([1, 2, 3, 4], n => Math.sqrt(n));
modifyArray([11, 22, 33], (n, i) => n ** (i + 1));

const computers = [
    { ram: '16GB', make: 'dell' },
    { ram: '16GB', make: 'lenovo' },
    { ram: '16GB', make: 'HP' },
    { ram: '16GB', make: 'lenovo' },
    { ram: '16GB', make: 'asus' },
    { ram: '16GB', make: 'lenovo' },
];

const filterArray = (array, predicate) => {
    // c => c.make === 'lenovo'
    // c ={ ram: '16GB', make: 'lenovo' },
    const filteredArray = [];
    // [
        // { ram: '16GB', make: 'lenovo' },
    // ]

    for(let index = 0; index < array.length; index++) {
        // index = 1
        const element = array[index];
        // element = { ram: '16GB', make: 'lenovo' },
        if(predicate(element)) filteredArray.push(element);
    }

    return filteredArray;
}


const fn = c => c.make === 'lenovo'
const allLenovos = filterArray(computers, fn);


const reduceArray = (array, reducer, initialValue) => {
    if(!array.length) return;

    let i = initialValue ?  1 : 0;
    let value = initialValue || array[0];
    for(let index = i; index < array.length; index++) {
        value = reducer(value, array[index]);
    }

    return value;
}


 