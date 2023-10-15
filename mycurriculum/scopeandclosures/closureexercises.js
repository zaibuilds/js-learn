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