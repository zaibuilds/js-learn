// 1 Create a function that swaps the values of two variables.

// Destructuring Assignment


let a = 1;
let b = 2;


// Testing

console.log(a);
console.log(b);

// Destructuring array

[a, b] = [b, a];

// Testing

console.log(a);
console.log(b);



// Using a Temporary Variable 

let varOne = "Variable 1";
let varTwo = "Variable 2";
 
// Testing 

console.log(varOne);
console.log(varTwo);

// Create a temporary variable

let temp;

// Swap variables

temp = varOne;
varOne = varTwo;
varTwo = temp;

// Testing

console.log(varOne);
console.log(varTwo);

// Addition and Difference

let c = 3;
let d = 4;

// Testing

console.log(c);
console.log(d);

// Maths

c = c + d;
d = c - d;
c = c  - d;

// Testing 

console.log(`This is now variable c ${c}`);
console.log(`This is now variable d ${d}`);


// Bitwise XOR Operator




// 2 Declare and initialise multiple variables in one line

// Method 1

let x = 11, y = 12, z = 13;

// Testing

console.log(x);
console.log(y);
console.log(z);


// Method 2 - Destructuring Assignments

const [h, i, j] = [8, "hehe", 10];

// Testing 

console.log("h = ", h, " ", " i = ", i, " j = ", " ", j );



// 3 Use template literals to create a sentence with variables.

let myWord = "sweet"

console.log(`Honey is so ${myWord}!`);



// 4 Calculate the length of a string and store it in a variable.

let myString = "Zai is so talented!"

let myStringLength = myString.length;

// Testing

console.log(myStringLength);



// 5 Check if a string has a specific substring

let mySecondString = "Zai is so amazing!";
let substr = "Zai";

// Testing

if (mySecondString.includes(substr)) {
    console.log(mySecondString + "\n", "She really is"); // \n creates a line break
};



// 6 Use the slice method to extract a portion of a string.

let myThirdString = "Zai is kinda erratic";

let mySlice = myThirdString.slice(-7);

// Testing

console.log(mySlice);



// 7 Declare an empty array and push elements into it.

const myArray = [];

myArray.push("Vivienne", "Westwood");

// Testing

console.log(myArray);



// 8 Use the splice method to remove elements from an array.

// Create array

const myOtherArray = ["banane", "citron", "limon"]


// Remove item one in the array and replace with "chocolat"

myOtherArray.splice(0,1, "chocolat");


// Testing

console.log(myOtherArray);



// 9 Sort an array of numbers in ascending order.

const myNumberArray = [1,3,2,4];

myNumberArray.sort();

// Testing

console.log(myNumberArray);



// 10 Find the maximum and minimum values in an array of numbers.

const myOtherNumberArray = [2,5,1,7];

// Method 1 - Using Math.min() and Math.max() methods

let myMinimumValue = Math.min(...myOtherNumberArray);
let myMaximumValue = Math.max(...myOtherNumberArray);

// Testing

console.log(`The minimum value is ${myMinimumValue}`);
console.log(`The maximum value is ${myMaximumValue}`);


// Method 2 - Iterating through the array

function findMinMax(){
    let myMin = Infinity;
    let myMax = -Infinity;

    for (let item of myOtherNumberArray) {

        // Find minimum value

        if (item < myMin) 
        myMin = item;

        if (item > myMax)
        myMax = item;
    }

console.log(`The minimum value in this array is ${myMin}`);
console.log(`The maximum value in this array is ${myMax}`)

};

findMinMax();


// Method 3 - Using Array.reduce() method

let myMinValue = myOtherNumberArray.reduce((acc, current) => Math.min(acc, current));
let myMaxValue = myOtherNumberArray.reduce((acc, current) => Math.max(acc, current));

// Testing

console.log(`The minimum value within this array is ${myMinValue}`);
console.log(`The maximum value within this array is ${myMaxValue}`);



// 11 - Use the map function to double the values in an array.

let myNewNumberArray = myOtherNumberArray.map( (x) => x * 2);

// Testing

console.log(myNewNumberArray);



// 12 - Use the filter function to create a new array with specific values.

let ages = [16, 21, 18, 19]

// Filter method

const results = ages.filter(checkAdult)

function checkAdult(age) {
    return age >= 18;
}

// Testing

console.log(results);



// 13 - Declare a function that takes parameters and returns a value.

let childSiblings = 1;

function checkchildSiblings (childSiblings) {
    if (childSiblings < 2) {
console.log("This is an only child")
    } else {
        console.log("This child has siblings ")
    }
}

checkchildSiblings();



// 14 - Use the typeof operator to check the type of a function

let functionType = typeof(checkchildSiblings);

console.log(`This is a ${functionType}`);



// 15 - Create a nested object with properties and sub-properties

const magician = {
    pet: "cat",
    spells: {
        healing:"Alakazam",
        combat:"Abracadabra"
    }
};



// 16 - Access nested object properties using dot notation

console.log(`This is a healing spell: ${magician.spells.healing}!`);



// 17 - Access nested object properties using bracket notation

console.log(magician["spells"]["combat"]);



// 18 - Check if an object has a specific property 

// Method 1 - hasOwnProperty() method

console.log(magician.hasOwnProperty('spells')); // returns true
console.log(magician.hasOwnProperty("familiar")); // returns false 