// 1 - Create an empty object 

const { random } = require("animejs");

const emptyObject = {

};

// 2 - Create an object with three properties: name, age and city

const randomPerson ={
    name: "Zai",
    age: "22",
    city: "London"
};

// 3 - Access the properties of an object using dot notation

console.log(randomPerson.name);

// 4 - Access the properties of an object using bracket notation

console.log(randomPerson["age"]);

// 5 - Update the value of a property in an object 

randomPerson.age = 23;

console.log(randomPerson.age);

randomPerson.city = "LA";

// 6 - Add a new property to an existing object

randomPerson.hobby = 'reading';

console.log(randomPerson.hobby);

// 7 - Delete a property from an object

delete randomPerson.city;

console.log(randomPerson.city); // Returns undefined

// 8 - Check if a property exists in an object.

console.log('hobby' in randomPerson); // returns true