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