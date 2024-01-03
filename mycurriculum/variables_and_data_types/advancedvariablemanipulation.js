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

class myPet {
    constructor (petSpecies, petName, petGender) {
        this.petSpecies = petSpecies;
        this.petName = petName;
        this.petGender = petGender

    }
}

class myFavouritePet {
    constructor (petBreed, petColour) {
        this.petBreed = petBreed;
        this.petColour = petColour;
    }
}


// Use the for...in loop to iterate over object properties.


// Use the for...of loop to iterate over iterable objects.
