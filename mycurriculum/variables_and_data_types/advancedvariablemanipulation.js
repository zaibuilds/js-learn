// Create a closure that remembers a variable from an outer scope.

let varOne = '1';
let closure;

function logVariable (){
    closure = varOne;
    console.log(`This number is ${closure}`)
}

logVariable();

// Use the forEach method to iterate over an array and perform an action.

let myItemArray = ['table', 'chair', 'desk'];

myItemArray.forEach((i) => console.log(`This is a ` + i));

// Create a class for a simple object and instantiate it.

// Creating a class
class petKitten {
    constructor(catName, catBreed, catGender) {
        this.name = catName;
        this.breed = catBreed;
        this.gender = catGender;
        
    }
}

// Instantiating a class 

const myPetKitten = new petKitten('Munchie','Siamese','Female');

console.log(myPetKitten)

// Implement inheritance between two classes. 

// Method 1 - Using prototypes

// Parent class
class myPet {
    constructor (petSpecies, petName, petGender, petSound) {
        this.petSpecies = petSpecies;
        this.petName = petName;
        this.petGender = petGender;
        this.petSound = petSound;
    }
}

// Child class
class myFavouritePet {
    constructor (petBreed, petColour) {
        this.petBreed = petBreed;
        this.petColour = petColour;
    }
}

// Set up the prototype chain

myFavouritePet.prototype = Object.create(myPet.prototype);
myFavouritePet.prototype.constructor = myFavouritePet;

// Add a method specific to myFavouritePet 

myFavouritePet.prototype.meow = function () {
    console.log("Meow!")
};

// Create instances

const myNewPet = new myPet ("Cat", "Mononoke","Female");
const myNewFavouritePet = new myFavouritePet ("Singapura", "White")

// Test methods

myNewFavouritePet.meow()
console.log(myNewPet)
console.log(myNewFavouritePet)


// Method 2 - Using ES6 classes

// Parent class
class Plant {
    constructor(plantName) {
        this.plantName = plantName;
    }

    plantNeeds() {
        console.log('This plant needs plenty of sun and water daily');
    }
}

// Child class inheriting from the parent

class Herb extends Plant {
    constructor(herbName) {
       super(herbName);
    }
}

// Set up the prototype chain
Herb.prototype = Object.create(Plant.prototype);
Herb.prototype.constructor = Herb;

// Add a method specific to herb
Herb.prototype.sayName = function() {
    console.log('Hello! I am a herb')
};

// Create instances
const myNewPlant = new Plant("Aloe Vera");
const myNewHerb = new Herb ("Rosemary");

// Test the methods

myNewPlant.plantNeeds();
myNewHerb.sayName();
myNewHerb.plantNeeds();

// Use the for...in loop to iterate over object properties.

const myBabes = {
    personName: 'akeem',
    age: '28',
    occupation: 'cybersecurity engineer',
    zodiac: 'libra'
}; 

// This object is not iterable

for (property in myBabes) {
console.log(property + ': ' + myBabes[property])
}

// Use the for...of loop to iterate over iterable objects.

const myArrayofNumbers = [2,4,6,8,10,12];

for (number of myArrayofNumbers) {
    console.log(`This number is ` + number + 1)
}

// Create and use a set to store unique values.

const zooAnimals = new Set(['lion', 'tiger', 'koala', 'giraffe']);

// Log all values 
console.log([...zooAnimals])

// Log specific values directly
console.log(zooAnimals.has('lion')? 'There is a lion at the zoo' : 'There is not a lion at the zoo')

// // Log the first value using Array.from()

console.log(Array.from(zooAnimals)[0])


// Create and use a map to associate keys with values.

// Create a map and pass an array to the map

const mySnacks = new Map (
    [
        ["doritos", 2],
        ["breadsticks", 4],
        ["cheese", 1]
    ]
)

// Map.get() - this method gets the value of a key in a map

console.log(mySnacks.get('doritos'));
console.log(mySnacks.get('breadsticks'));
console.log(mySnacks.get('cheese'));