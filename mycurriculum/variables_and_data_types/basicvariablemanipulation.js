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

// 12 - Declare a constant variable PI and assign it the value of π (3.14159).

const pi = 3.14159;

// 13 - Declare a variable radius and assign a number to it.

let radius = 3;

// 14 - Calculate the area of a circle using PI and radius and store it in a variable.

let circleArea = radius * pi;
console.log(`The circle area is ${circleArea}`) // Expected output 'The circle area is 9.424769999999999'

// 15 - Create an array of fruits with several fruit names

const myFruits = ['apple', 'banana', 'cherry', 'kiwi', 'pineapple'];

// 16 - Add a new fruit to the fruits array

myFruits.push('grapes');
console.log(myFruits) // Expected output is 'apple, banana, cherry, kiwi, pineapple, grapes'

// 17 - Remove the last fruit from the fruits array.

myFruits.pop();
console.log(myFruits); // Expected output is 'apple, banana, cherry, kiwi, pineapple'

// 18 - Check if a variable is of type string

let myString = 'Stringzino';
console.log(typeof myString); // Expected output string

// 19 - Check if a variable is of type undefined

let myUndefinedVariable;
console.log(typeof myUndefinedVariable); // Expected output undefined 

// 20 - Check if a variable is a number

let myNumberVariable = 3;
console.log(typeof myNumberVariable);

// 21 - Use the typeof operator to determine the type of a variable

console.log(typeof isStudent);

// 22 - Declare a variable sentence and assign a string to it 

let mySecondSentence = 'Zai does her best';

// 23 - Split the sentence into an array of words

let mySentenceArray = mySecondSentence.split(' '); // Separating the string by spaces and placing result into a new variable
console.log(mySentenceArray); // Logging new variable

// 24 - Join the words in the array into a single string

let myJoinedSentence = mySentenceArray.join(' '); // Joining the string and providing spaces between words
console.log(myJoinedSentence); // Logging new joined string

// 25 - Convert a string to uppercase

console.log(myJoinedSentence.toUpperCase());

// 26 - Convert a string to lowercase

console.log(myJoinedSentence.toLowerCase());

// 27 - Declare an empty object car and add properties for make, model and year

const car = {

};

car.make = 'Tesla';
car.model = 'S1';
car.year = '2021';

console.log(car.make);
console.log(car.model);
console.log(car.year);

// 28 - Use the delete keyword to remove a property from the car object

delete car.year; // Delete the year property from the car object
console.log(car); // Console log car object to view properties

// 29 - Decare an array of mixed data types (e.g numbers, strings, booleans)

const myMixedDataTypeArray = ['hello', 1, true];

// 30 - Use the typeof operator to check the type of each element in the mixed data type array

console.log(typeof myMixedDataTypeArray[0]);
console.log(typeof myMixedDataTypeArray[1]);
console.log(typeof myMixedDataTypeArray[2]);