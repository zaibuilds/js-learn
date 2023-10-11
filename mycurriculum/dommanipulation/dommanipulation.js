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


// 6 - Toggle the visibility of an HTML element when a button is clicked.

const actionButton = document.getElementById('myActionButton');

actionButton.addEventListener("click", function(){

    const hiddenElement = document.getElementById('myHiddenElement');

   if (hiddenElement.style.visibility === "hidden") {
    hiddenElement.style.visibility = "visible"
   } else {
    hiddenElement.style.visibility = "hidden"
   }
   
});

// 7 - Add a new list item to an existing unordered list using JavaScript.
