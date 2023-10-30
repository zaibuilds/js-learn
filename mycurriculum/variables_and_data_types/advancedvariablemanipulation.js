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


// 3 - Create a class for a simple object and instantiate it

// Class declaration
class myKittens {
    constructor(colour, breed, temperament) {
        this.colour = colour || 'white';  // A value can be provided for colour and if a value isn't provided the default value 'white' will be used 
        this.breed = breed || 'singapura';
        this.temperament = temperament || 'friendly';
    }
}

const kittenOne = new myKittens('black', 'tabby', 'naughty');

console.log(kittenOne);

console.log(kittenOne.colour);


// 4 - Implement inheritance between two classes 

// Parent class declaration
function firstJacket(colour, fabric) {
   
        this.colour = 'black';
        this.fabric = 'sherpa';
  
}

// Add method to prototype of firstJacket class

firstJacket.prototype.introduceProduct = function() {
    console.log(`This jacket is ${this.colour} and made of ${this.fabric}`);
}

// Child class

function storeCustomer(fabric, colour) {
    // Call the constructor of the parent class using "call" or apply

    firstJacket.call(this, colour);
    firstJacket.call(this, fabric);
}

// Create a prototype chain for inheritance

storeCustomer.prototype = Object.create(firstJacket.prototype);
storeCustomer.prototype.constructor = storeCustomer; // Reset the constructor property

// Adding a method to the child class

storeCustomer.prototype.request = function() {
    console.log("What colour and fabric is this jacket?")
};

// Instantiate objects

const myCustomer = new storeCustomer (this.colour);

myCustomer.request(); // What colour is this jacket?

myCustomer.introduceProduct(); // This jacket is black