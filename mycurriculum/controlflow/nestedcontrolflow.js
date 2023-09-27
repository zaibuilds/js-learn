// 1 - Write a program that asks the user for their age and income and determines if they qualify for a discount based on both conditions


function checkDiscount () {
    
    const user = {
    age:'22',
    income: '2500'
};

    if (user.age < 25 && user.income < 3000) {
        console.log("You can receive an under 25 discount")
    }
};

checkDiscount();