// 1 - Create a function that prints "Hello, world!" to the console

function helloWorld() {
    console.log('Hello,world!')
};

helloWorld();

// 2 - Create a function that adds two numbers and returns the result

function additionFunction(number1, number2) {
 let result = number1 + number2;
 console.log(`The result is ${result}`)
}

additionFunction(4,3);

// 3 - Create a function that subtracts two numbers and returns the result

function subtractionFunction(number1, number2) {
    let result = number1 - number2;
    console.log(`The result is ${result}`)
}

subtractionFunction(11,3);

// 4 - Create a function that multiplies two numbers and returns the result 

function multiplicationFunction(number1, number2) {
    let result = number1 * number2;
    console.log(`The result is ${result}`)
}

multiplicationFunction(6,7);

// 5 - Create a function that divides two nmumbers and returns the result 

function divisionFunction(num1,num2){
    let result = num1 / num2;
    console.log(`The result is ${result}`)
}

divisionFunction(8,4);

// 6 - Create a function that concatenates two strings and returns the result

function concatStrings(str1, str2) {
    let result = str1 + str2;
    console.log(result)
}

concatStrings('Applebottom ', 'Jeans');

// 7 - Create a function that calculates the square of a number and returns the result

function squareNum(num) {
 return Math.pow(num);  
}

squareNum(2);