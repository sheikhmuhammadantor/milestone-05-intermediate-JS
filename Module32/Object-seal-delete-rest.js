const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer",
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    isActive: true,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const car = {
    make: "Tesla",
    model: "Model S",
    year: 2023,
    color: "Midnight Silver",
    features: ["Autopilot", "Electric", "Panoramic Roof", "Heated Seats"],
    specifications: {
        horsepower: 670,
        range: 405, // in miles
        topSpeed: 155, // in mph
        zeroToSixty: 3.1 // in seconds
    },
    isElectric: true,
    start: function () {
        console.log(`${this.make} ${this.model} is starting...`);
    },
    drive: function () {
        console.log(`Driving the ${this.color} ${this.make} ${this.model}.`);
    }
};

// console.log(person);
// console.log(car);


// Rest Operator;
const { address, ...person2 } = person;
// console.log(person2);


// Spread Operator
const spreadObj = { ...person, ...car };
// console.log(spreadObj);


// Delete Object Element;
delete person.occupation;
// console.log(person)


// Object.Seal()
Object.seal(person);
person.age = 32;
delete person.age;
// console.log(person);


// Object.Freeze()
Object.freeze(person);
person.age = 35;
delete person.age;
// console.log(person);

