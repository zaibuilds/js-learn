// Debugging Exercises

// Exercise 1

function add(a, b) {
    return a - b;
  }
  
  console.log(add(5, 3)); // Should print 8

  
  // Exercise 2

  var x = 10;

function subtractFive(x) {
  return x - 5;
}

console.log(subtractFive(x)); // Should print 5


// Exercise 3

function greet(name) {
    console.log("Hello, " name);
  }
  
  greet("Alice"); // Should print "Hello, Alice"

  
// Exercise 4

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
  // Should print 0, 1, 2, 3, 4 with a 1-second delay between each

  
  // Exercise 5

  