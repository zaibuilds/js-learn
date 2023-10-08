// 1 - Create an HTML page with a button. When the button is clicked, display an alert.

document.addEventListener("DOMContentLoaded", function() {
    
    const button = document.getElementById("myButton");
    button.addEventListener("click", function() {
        alert("Button clicked!");
    });
});

// 2 - Change the text of a paragraph element using JavaScript

const paragraph = document.getElementById("myParagraph").innerHTML="I changed the text :-)";

// 3 - Change the background color of a div element using JavaScript

var myDiv = document.getElementById('myDiv');

myDiv.style.backgroundColor = "pink";

// 4 - Hide an HTML element using JavaScript

var mySpan = document.getElementById('mySpan');

mySpan.style.visibility = "hidden";

// 5 - Show a hidden HTML element using JavaScript

var myHeading = document.getElementById('myHeading');

myHeading.style.visibility = "visible";
