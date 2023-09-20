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

// 3 - 