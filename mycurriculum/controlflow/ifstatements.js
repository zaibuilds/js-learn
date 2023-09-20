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

// 5 - Write an if-else if-else statement to determine the grade based on a given score

let studentGrade= 74;

if (studentGrade >= 90) {
    console.log("This student is graded A")
} else if (studentGrade >= 80) {
    console.log("This student is graded B")
} else if (studentGrade >= 70) {
    console.log("This student is graded C")
} else if (studentGrade >= 60) {
    console.log("This student is graded D")
} else {
    console.log("This student is graded F")
};

// 6 - Write an if statement to check if a user's username is at least 6 characters long

let myUserName = "zai";

if (myUserName.length > 6) {
    console.log("This username is long enough")
} else {
    console.log("Please create a username longer than 6 characters")
};

// 7 - Write an if statement to check if a string contains the word "JavaScript"

let myString = "C+ is a great beginner programme language";
let substr = "JavaScript";

if (myString.includes(substr)) {
    console.log("This contains the word JavaScript")
} else {
    console.log("This does not include the word JvaaScript")
};

// 8 - Write an if statement to determine if a year is a leap year

let year = 2023;

if (year % 4 === 0 && year % 100 === 0) {
    console.log("This is a leap year")
} else {
    console.log("This is not a leap year")
};

// 9 - Write an if statement to check if a string is empty

let thisString= "";

// Method 1 - Trim method 
/* The trim method removes white space from both the beginning and end of a string. 
After trimming, if the string has a length of zero, it is considered empty. */

if (thisString.trim() === "") {
    console.log("This string is empty")
} else {
    console.log("This string is not empty")
};

// Method 2 - Using .length method
// Check if the length of the string is equal to 0 to determine if it's empty

if (thisString.length === 0) {
    console.log("This string is empty")
} else {
    console.log("This string is not empty")
};

// Method 3 - Using a conditional check
// You can simply use a conditional statement to check if the string is empty or only contains whitespace characters

if (!thisString) {
    console.log("This string is empty or only contains whitespace")
} else {
    console.log("This string is not empty")
};

// 10 - Write an if-else statement to determine if a number is divisible by both 3 and 5

let mySpecialNumber = 33;

if (mySpecialNumber % 3 === 0 && mySpecialNumber % 5 === 0) {
    console.log("This number is divisible by both 3 and 5");
} else {
    console.log("This number isn't divisible by both 3 and 5");
};
