// Module that is present in the same directory
var calculate = require("./calculate")
var sum = calculate.test(5, 6);
console.log("The sum is: " + sum)


// Module that resides in a director with index.js file
var calculate = require("./multiply");
var mul = calculate(5, 6);
console.log("The multiplication is " + mul);

// Module that resides in a directory without index.js file
var calculate = require("./power");
var pow = calculate(2, 3);
console.log("The power is " + pow);