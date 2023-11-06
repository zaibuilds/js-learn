// 1 - Convert a function declaration to an arrow function

function greetUser (name) {
    console.log(`Hey there ${name}`);
}

let greetTheUser = (userName) => console.log(`Hello there ${userName}`);


greetUser('Zai');
greetTheUser('Akeem');


// 2 - Use let and const to declare variables in different scopes


// Local scope - let

function sayName() {
    let randomName = 'Z'
    console.log(randomName);
}

// console.log(randomName); // returns name is not defined

// Global scope - let

let greetingFunction = (someonesName) => console.log(`Hello ${someonesName}`);

let someonesName = 'Zai';
greetingFunction(someonesName);

// Local scope const

let declaringObject = () => {
    const myObject = 'tablets'
    console.log(`Please hand me my ${myObject}`)
}

declaringObject();
// console.log(myObject); // returns myObject is not defined

// Global scope const

let declareObj = (object) => console.log(`This is a ${object}`);

const object = 'pencil';

declareObj(object);