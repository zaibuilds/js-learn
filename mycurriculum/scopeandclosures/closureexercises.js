// Closures Exercises

// 1 - Create a function that returns another function. What happens when you call the outer function and the inner function?

function myFunction () {
    function myInnerFunction () {
        console.log("Hi");
    }

    return myInnerFunction();
}

myFunction(); // Returns the result of the inner function
// myInnerFunction(); // Returns error myInnerFunction is not defined


// 2 - Create a closure that captures a variable from the outer scope and prints its value.

function outerFunction() {
    let outerVariable = 10;

    function innerFunction() {
        console.log(outerVariable);
    };

    return innerFunction;
}

outerFunction(); 

const closure = outerFunction(); // Closure is now a reference to innerFunction
closure(); // This still logs 10 even though outerFunction has completed

// 3 - Create a function that takes a parameter and returns a function that uses that parameter.

function myMathFunction(num) {
    return function myInnerMathFunction(){
        console.log(`This number is ${num}`);
    }
}

const innerFunction = myMathFunction(3);
innerFunction();

// 4 - Create a counter function using closures that increments a value each time it's called.




// 5 - Create a function that keeps track of the total number of function calls.


// 6 - Create a function that calculates the sum of two numbers and returns a closure to compute the sum.


// 7 - Create a function that generates a random number between two specified values and returns it as a closure.


// 8 - Create a function that memorises the results of expensive function calls using closures.


// 9 - Create a function that logs the timestamp of each function call.


// 10 - Create a function that checks if a given number is even or odd using a closure.

