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

myArray.push("Vivienne");

// Testing

console.log(myArray);





