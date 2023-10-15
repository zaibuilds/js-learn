// Basic Scope Exercises

// 1 - Create a variable in the global scope

let myVariable = 1;

// 2 - Create a variable inside a function and try to access it outside the function. What happens?


function myFunction () {
    let mySecondVariable = 2;
};

// console.log(mySecondVariable); // Output error says mySecondVariable is not defined

// 3 - Create a variable inside a function and access it inside the same function. Is it accessible?

function mySecondFunction () {
    let myThirdVariable = 3;
    
    console.log(`The third variable value is ${myThirdVariable}`);
}


mySecondFunction(); // This variable is accessible within the same function it was created in

// 4 - Create a variable inside a function using the var keyword and try to access it outside the function.

function myThirdFunction () {
    var name = "Zai";
}

// console.log(`My name is ${name}`); // Output error says name is not defined

// 5 - Create a variable inside a function using the 'let' keyword and try to access it outside the function

function myNameFunction () {
    let myName = "Zai";
}

// console.log(`My name is ${myName}`); - Output error says myName is not defined

// 6 - Create a variable inside a function using the 'const' keyword and try to access it outside the function

function myRandomFunction () {
    const myHobby = "coding";
}

// console.log(`My favourite hobby at the moment is ${myHobby}`); - Output error says myHobby is not defined

// 7 - Create two variables with the same name, one in the global scope and one inside a function. What happens when you access that variable?

const myName = "Zai";

function introduceMyself () {
    const myName = "Zaina";
    console.log(`Hey! Great to meet you, my name is ${myName}`);
}

introduceMyself(); // The variable in the function is used  

console.log(myName); // The global variable is used

// 8 - Define a function inside another function and try to access variables from both functions.

function myNestedFunction () {
    let myFavouriteFood = "pizza";
    console.log(`My favourite food is ${myFavouriteFood}`);
    function myBabyFunction () {
        let myFavouriteDrink = "appletiser";
        console.log(`My favourite drink is ${myFavouriteDrink}`);
    }
}

myNestedFunction(); // Runs as expected
// myBabyFunction(); // Returns error 'myBabyFunction' is not defined

// console.log(myFavouriteFood); // Output error says myFavouriteFood is not defined
// console.log(myFavouriteDrink); // Output error says myFavouriteDrink is not defined
 
// 9 - Create a variable inside a block (using {}) and try to access it outside the block.

function myCoolFunction () {
    let myRandomVariable = 5;
};

// console.log(myRandomVariable); - Output error says myRandomVariable is not defined

// 10 - Create a variable inside a block (using {}) and try to access it inside the block. Is it accessible?

function myNiceFunction () {
let myNiceVariable = "Dragon Quest"
console.log(`My favourite RPG game is ${myNiceVariable}`);
};

myNiceFunction();