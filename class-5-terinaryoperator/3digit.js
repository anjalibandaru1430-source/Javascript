
let input = require('prompt-sync')();
let num = parseInt(input("Enter a number:"));
num>= 100 && num <= 999 ? console.log("The number is a three-digit number.") 
                  : console.log("The number is not a three-digit number.");
