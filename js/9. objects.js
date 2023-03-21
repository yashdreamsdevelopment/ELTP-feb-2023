const dynamicKey = "totalRuns";
const cricketPlayer = {
    name: "Mahendra",
    surname: "Dhoni",
    age: 41,
    isTalented: false,
    technique: undefined,
    captaincy: null,
    lastFiveInnings: [0, 20, 0, 15, 0],
    address: {
        city: "Ranchi",
        state: "JH"
    },
    bat: function() {
        // this points to cricketPlayer
        console.log(`${this.name} cant bat`);
    },
    bowl: () => {
        // will ALWAYS be called from the global object
        // window / globalThis
        console.log(`${this.surname} cant bowl`);
    },
    [dynamicKey]: 20000, 
}

// accessing values
cricketPlayer.age; // 41
cricketPlayer["captaincy"]; // null

// dynamic key
const key = "lastFiveInnings";
cricketPlayer.key; // undefined
cricketPlayer[key]; // [0,20, 0, 15, 0]

// change values
cricketPlayer.age = 42;
cricketPlayer["captaincy"] = true;
cricketPlayer[key] = [0, 20, 0, 15, 50];

cricketPlayer.totalRuns; // undefined
cricketPlayer.totalRuns = 15000;
// adds a new key value pair

cricketPlayer.bat(); // calls a method on the object
cricketPlayer.bowl();
const { bat, bowl, name, surname } =  cricketPlayer;
bat();
bowl();

if(!cricketPlayer.totalWickets) {
    console.log("totalWickets does not exist")
}

if(!cricketPlayer.technique) {
    console.log("techniques does not exist");
}

cricketPlayer.hasOwnProperty("technique"); // true


const person = { name: "A", age: 20 };

Object.keys(person); // ['name', 'age'];
Object.values(person); // ["A", 20];

// assignment for the day
// Object.assign
// Object.freeze

// destructuring
const computer = {
    ram: "16 GB",
    processor: "i7 10th gen",
    company: "Lenovo"
};

const { ram, processor, company } = computer;
const { company: make } = computer;
// extracting company into make

const { processor: p, ...restOfTheComputer } = computer;
// restOfTheComputer = { ram: "16 GB", company: "Lenovo" }

// const computerClone = computer; 
// copy the reference of computer in computerClone

// spread operator
// SHALLOW CLONE
const computerClone = { ...computer };