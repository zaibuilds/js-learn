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

// 4 - Access the properties of an object using bracet notation

console.log(randomPerson["age"]);

// 5 - Write a while loop to find the factorial of a number

function findFactorial(number) {

// Check that the number is non-negative 

if (number < 0) {
    return "Factorial is not defined for negative numbers"
}

// Initialise variables 

let factorial = 1;
let i = 1;

// Use a while loop to calculate the factorial
while (i <= number) {
    factorial *= i;
   i ++;
}

return factorial;

}

const num = 4;
const result = findFactorial(num);
console.log(`The factorial of ${num} is: ${result}`);