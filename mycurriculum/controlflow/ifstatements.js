// 1 - Write an if statement to check if a number is positive 

let myNumber = -4;

if (myNumber > 0) {
    console.log("This number is positive");
} else {
    console.log("This number is negative")
}

// 2 - Write an if-else statement to determine if a user is old enough to vote (age >= 18)

const age = 16;

if (age >= 18) {
    console.log("This user is old enough to vote");
} else {
    console.log("This user is too young to vote");
}

// 3 - Write an if-else statement to determine if a number is even or odd 

let thisNumber = 21;

if (thisNumber % 2 === 0) {
    console.log("This number is even")
} else {
    console.log("This number is odd")
};

// 4 - Write a nested if statement to check if a number is positive and even

let specialNumber = 97; 

if (specialNumber > 0) {
    if (specialNumber % 2 === 0) {
        console.log("This number is positive and even")
    } else {
        console.log("This number is positive and odd")
    }
} else {
    if (specialNumber % 2 === 0) {
        console.log("This number is negative and even")
    } else {
        console.log("This number is negative and odd")
    }
};

