// 1 - Write a program that asks the user for their age and income and determines if they qualify for a discount based on both conditions


function checkDiscount () {
    
    const user = {
    age:'26',
    income: '3500'
};

    if (user.age < 25) {
       if (user.income < 3000) {
        console.log("You are eligible for the under 25 discount and the under 3K monthly discount")
       } else {
        console.log("You are only eligible for the under 25 discount")
       }
    } else if (user.age >=25) {
        if (user.income < 3000) {
            console.log("You are only eligible for the under 3K monthly discount")
        } else {
            console.log("You are not eligible for any discounts")
        }
    }
};

checkDiscount();


// 2 - Write a program that checks if a year is a leap year and, if it is, checks if it's divisible by 400.

var year = 2450;

function checkLeapYear () {
    if (year % 4 === 0) {        
        if (year % 400 === 0) {
            console.log("This is a leap year and divisible by 400")
        } else {
            console.log("This is just a leap year")
        }
    } else {
        console.log("This is not a leap year")
    }
};

checkLeapYear();