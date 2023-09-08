// 1 - Write an if statement to check whether a number is positive

let myNumber = -2;

console.log(Math.sign(myNumber));

if (Math.sign(myNumber) > 0) {
    console.log("This number is positive")
} else if (Math.sign(myNumber) < 0) {
    console.log("This number is negative")
};


// 2 - Write an if-else statement to determine if a user is old enough to vote (age >= 18).

let userAge = 16;

if (userAge >= 18) {
    console.log("You are old enough to vote")
} else {
    console.log("You are too young to vote")
};


// 3 - Write an if-else statement to determine if a number is even or odd.

let myOtherNumber = 5;

if (myOtherNumber % 2 === 0) {
    console.log("This number is even")
} else if (myOtherNumber % 2 === 0) {
    console.log("This number is odd")
};


// 4 - Write a nest if statement to check if a number is positive and even