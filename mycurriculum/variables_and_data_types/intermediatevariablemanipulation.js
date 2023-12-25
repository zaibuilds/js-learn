// Create a function that swaps the values of two variables.
 
function swapVariables() {
var a = 1;
var b = 2;
var store; 

store = a;
a = b;
b = store;

 console.log(a)
 console.log(b)
}

// swapVariables()

// Declare and initialise multiple variables in a single line.

let d = 4;
    e = 5;
    f = 6;

    // console.log(d)
    // console.log(e)
    // console.log(f)

// Use template literals to create a sentence with variables.

let wordOne = "Hello"
let wordTwo = " Lover"

// console.log(`He said ${wordOne} to his ${wordTwo}`);

// Calculate the length of a string and store it in a variable.

let strLength = wordOne.length;
// console.log(strLength);

// Check if a string contains a specific substring 

let strCheckstr = "Hello Kitty";
let substr = "Kitty";

// console.log(strCheckstr.includes(substr));

// Use the slice method to extract a portion of a string.

let strSlice = wordTwo.slice(0,5);
// console.log(strSlice)

// Declare an empty array and push elements into it.

const myPastryArray = [];
myPastryArray.push('croissant');
myPastryArray.push('madeleine');
myPastryArray.push('pain au chocolat');

// console.log(myPastryArray);

// Use the splice method to remove elements from an array.

myPastryArray.splice(0,1);

// console.log(myPastryArray);

// Sort an array of numbers in ascending order.

const myArrayOfAscendingNumbers = [8, 7, 3, 4, 2];

myArrayOfAscendingNumbers.sort((a,b) => a - b)

// console.log(myArrayOfAscendingNumbers);

// Find the maximum and minimum values in an array of numbers.

// console.log(Math.max(...myArrayOfAscendingNumbers));
// console.log(Math.min(...myArrayOfAscendingNumbers));

// Use the map function to double the values in an array.

const doubleMyNum = [1,2,3,4];

let myDoubledNums = doubleMyNum.map((a) => a * 2);

// console.log(myDoubledNums);

// Use the filter function to create a new array with specific values.

let myFilteredArray = myDoubledNums.filter((num) => num > 2)

// console.log(myFilteredArray)

// Declare a function that takes parameters and returns a value.

let determineLength = ((string) => console.log(string.length));

// determineLength('peekaboo');

// Use the typeof operator to check the type of a function.

let determineFunction = ((func) => console.log(typeof func));

determineFunction(determineLength);


