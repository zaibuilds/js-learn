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

