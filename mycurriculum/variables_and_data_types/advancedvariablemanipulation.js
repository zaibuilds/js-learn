// 1 - Create a closure that remembers a variable from an outer scope

let myName = "Zai";
let closure; // Declare closure in the global scope


function greetUser() {
    closure = myName; // Assigne myName to the closure variable
    console.log(`Welcome ${closure}`);
}

greetUser();

console.log(closure); // Now closure can be accessed in both the local scope and the global scope


// 2 - Use the forEach method to iterate over an array and perform an action

const myNumberArray = [2,4,6,8];

myNumberArray.forEach(number => {
   console.log(number * 2);
});


// Create a class for a simple object and instantiate it

class cuteKitten {
    constructor() {
        
    }
}