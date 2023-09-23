// 1 - Write a for loop to print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2 - Write a for loop to calculate the sum of all even numbers from 1 to 100

let totalSum = 0;

for (let num = 2; num <= 100; num++) {
    // Check if the current number is even 

    if (num % 2 === 0) {
        totalSum += num;
    }

}

console.log("The total sum of even numbers from 1 to 100 equals", totalSum);

// 3 - Write a while loop to find the factorial of a number

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

    // 4 - Write a do-while loop to ask the user for a password until they enter the correct one.

    const myPassword = "PrettyLittleBird22";
    let userInput;
    let attempts = 0;

    do {
        userInput = prompt("Please enter your password");

        if (userInput === myPassword) {
            console.log("Your password is correct, continue your sign in");
            break;  // Exit the loop when the correct password is inputted
        } else {
            attempts++;
            console.log("Your password is incorrect, please try again");
        }

    } while (attempts < 3);

     if (attempts === 3) {
        console.log("Your account has been temporarily locked, please try again later.")
     }