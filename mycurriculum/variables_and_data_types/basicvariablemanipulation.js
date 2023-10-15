// 1 - Declare a variable and assign your name to it

let myName = "Zaina";


// 2 - Create a variable and assign your age to it

let myAge = 22;

// 3 - Calculate the sum of two numbers and store it in a variable

let mySum = 2 + 10;

// Testing

console.log(mySum)

// 4 - Concatenate two strings and store the result in a variable 

// concat method

let wordOne = "My";
let wordTwo = "milkshake";

let mySentence = wordOne.concat(" ", wordTwo);

console.log(mySentence);

// 

//

//

// 5 - Declare a variable isStudent and assign a boolean value to it

let isStudent = true;

// 6 - Create a variable myArray and assign an array of numbers to it

const myArray = [2,4,5,7];

// 7 - Access the third element of myArray

console.log(myArray[2]);

// 8 - Modify the second element of myArray

myArray.splice(2, 1, 8); // Replaces 1 element at index 2

console.log(`The new variable is ${myArray[2]}`);

console.log(myArray); // Expected output = 2,4,8,7 

// 9 - Declare an object with properties name, age and gender

const person = {
    name: 'Zai',
    age: '22',
    gender: 'female'
};

console.log(person.name); // Expected output = Zai

// 10 - Access the age property of the person object

console.log(person.age); // Dot notation
console.log(person['age']); // Bracket notation

// 11 - Change the value of the name property in the person object

person.name = 'Akeem';

console.log(person.name); // Expected output = Akeem