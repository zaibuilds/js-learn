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

myCustomer.introduceProduct(); // This jacket is black and made of sherpa


// 5 - Use the for...in loop to iterate over object properties.


const myPuppy = {
    breed: 'labrador',
    colour: 'blonde',
    age: '1'
}

for (const property in myPuppy) {
    console.log(`${property}: ${myPuppy[property]}`);
}


// 6 - Use the for...of loop to iterate over iterable objects.

const myArrayofNumbers = [2,4,6,8];

for ( item of myArrayofNumbers) {
    console.log(`This number is ${item}`);
};


// 7 - Create and use a set to store unique values 

// Creating a set and passing an array to the new Set () constructor

const setofAnimals = new Set (['koala', 'kangaroo', 'chinchilla', 'wallaby']);

// Create a set and add literal values

const myGames = new Set ();

// Adding values to the set

myGames.add('Dragon Quest IV');
myGames.add('Dragon Quest V');
myGames.add('Dragon Quest VI');
// If you add equal elements only the first will be saved
// Create a set and add variables

// Create variables

const myGame1 = "Dragon Quest IV";
const myGame2 = "Dragon Quest V";
const myGame3 = "Dragon Quest VI";

// Create a set 

const myFavouriteGames = new Set();

// Add the variables to the set

myFavouriteGames.add(myGame1);
myFavouriteGames.add(myGame2);
myFavouriteGames.add(myGame3);


// 8 - Create and use a map to associate keys with values 

// Passing an array to new Map ()

// Create a map

const myPastries = new Map ([
    ['eclairs', 20],
    ['croissants', 15],
    ['madeleines', 10]
])

// for of loop of pastries

for (pastry of myPastries) {
    console.log(`We have ${pastry} in stock  `)
};

// Map.set()

// Create a map

const puppies = new Map();

// Set map values

puppies.set('labradors', 2);
puppies.set('huskies', 3);
puppies.set('chihuahuas', 4);

console.log(puppies);

// The set() method can also be used to change existing map values

puppies.set('chihuahuas', 2);

console.log(puppies);

// Map.get() 
// The get() method gets the value of a key in a map

puppies.get('labradors'); // Returns 2

console.log(puppies.get('labradors')) // Returns 2 in the console

// Map,size()
// The size() method returns the number of elements in a map

console.log(puppies.size);

// Map.delete()
// The delete() method removes a Map element

puppies.delete('chihuahuas');

console.log(puppies)

// Map.clear()
// The clear() method removes all the elements from a map

const men = new Map ([
    ['a man', 1],
    ['another man', 2]
]);

men.clear();

console.log(men);

// 9 - Use destructuring to extract values from an array and object.

// Extracting values from an array

const patientNames = ['Michael', 'Scott'];

// Destructuring assignment 
// sets firstName = arr[0]
// sets surname = arr[1]

let [firstName, surname] = patientNames;

console.log(firstName);
console.log(surname);

// Extracting values from an object

const myTelfar = {
    colour: 'blue',
    size: 'large',
    material: 'corduroy'
}

var telfarArray = [];

for (var property in myTelfar) {
    telfarArray.push(myTelfar[property]);
}

console.log(telfarArray);


// 10 - Declare and use a generator function

function* myGeneratorFunction(i) {  
    let index = 0;
    while (true) {
      yield index++;
    }
}

const myGen = myGeneratorFunction();

console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);


// 11 - Use the Promise constructor to create a promise.

const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      const data = { result: 'Some data' };
      // Simulate a successful operation
      resolve(data);
      // If there's an error:
      // reject("An error occurred");
    }, 1000);
  });
  
  myPromise
    .then(result => {
      console.log("Promise resolved with result:", result);
    })
    .catch(error => {
      console.error("Promise rejected with error:", error);
    });

// 12 - Use async/await to work with asynchronous operations.


// 13 - Create a custom error class.


// 14 - Use the try...catch statement to handle errors.


// 15 - Declare and use a symbol as an object property.


// 16 - Use the Object.keys(), Object.values(), and Object.entries() methods.


// 17 - Use bitwise operators to perform bitwise operations on numbers.


// 18 - Use the parseInt() and parseFloat() functions to convert strings to numbers.


// 19 - Declare a variable with global scope and access it locally.


// 20 - Use the localStorage or sessionStorage to store and retrieve data in the browser.
