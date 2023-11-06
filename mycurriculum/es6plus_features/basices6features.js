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


// 3 - Create a template string with placeholders

let whoseName = 'Oklen';
console.log(`${whoseName} can you help me with this please?`)

// The ${whoseName} inside the backticks () is a placeholder for the value of the whoseNamevariable. When you use template literals like this, you can insert variables or expressions inside${}within the string, and they will be replaced with their actual values when the string is evaluated. In this case,whoseName` will be replaced with 'Oklen' in the resulting string.
