const { string } = require("nunjucks/src/filters");

let myName = "Zai";

let myAge = 22;

// console.log(myName);

// console.log(myAge);

let numOne = 5;
let numTwo = 6;

let mySum = numOne + numTwo;

// console.log(mySum);
// console.log(mySum);

let wordOne = "Cat";
let wordTwo = "Claws";
let wordThree = "cutiepie";

let myString = wordOne.concat(" ", wordTwo); // Concat method

console.log(myString);

console.log(`Mononoke is a ${wordThree}`); // Template literals 

let isStudent = true;

console.log(isStudent);

const myArray = [1,2,3,4];

console.log(myArray[2]);

myArray[2]=7;

console.log(myArray);

// Declare an object

const person = {
    name: "Zai",
    gender: "female",
    age: "22"
}

// console.log(person.name);
console.log(person.age); // Accessing object properties

person.name = "Akeem" // Changing object properties

console.log(person.name); 

const pi = 3.1459;

let radius = 6;

let circleArea = pi * radius;

console.log(circleArea);

// Array methods

const myFruits = ["lemon", "orange", "banana", "apple"];

myFruits.push("grapefruit"); // Push method adds an object to an array

console.log(myFruits);

myFruits.pop(); // Pop method removes the last object from an array

console.log(myFruits);

// Checking data types using 'if' statements

let myFriend = "Wez";

if ( typeof myFriend === "string" ) {
    console.log("It's a string!")
}; 

let mySexuality = undefined;

if (typeof mySexuality === "undefined") {
    console.log("I'm just finding myself...")
}

let myBae = 1;

if (typeof myBae === "number") {
    console.log("Lover Girl Season!")
}

console.log(typeof mySum);

// Split and join methods

let mySentence = "Zai is a lover girl, but only sometimes";

let mySentenceArray = mySentence.split(" ");

console.log(mySentenceArray.join(" "));

// To upper case and to lower case methods

let myBabes = "akeem";

console.log(myBabes.toUpperCase());
console.log(myBabes.toLowerCase());

// Declaring an empty object and adding properties

// Declaring an empty object

const car = {

};

// Adding properties to an empty object 

car.make = "Tesla";
car.model = "S1";
car.year = "2022";

// Testing

console.log(car);

// Deleting properties from an object

delete car.make;

// Testing

console.log(car);

// Creating an array with mixed data types

const myMixedArray = ["Girl",  4, true, undefined, null];

// 

console.log(typeof myMixedArray[0]);
