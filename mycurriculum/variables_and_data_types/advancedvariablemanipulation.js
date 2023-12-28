// Create a closure that remembers a variable from an outer scope.

let varOne = '1';
let closure;

function logVariable (){
    closure = varOne;
    console.log(`This number is ${closure}`)
}

logVariable();

// Use the forEach method to iterate over an array and perform an action.
