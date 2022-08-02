var prompt = require('prompt-sync')();

let a=prompt("Enter the first number:  ")

console.log("First Number is",+ a);

let b = prompt("Enter the second number:  ")

console.log("Second Number is",+ b);

let result = parseInt(a) - parseInt(b);
console.log(result);

//Using functions

function subtraction(a1,a2) {

    let a3=a1-a2;
    console.log("Subtraction of two numbers is",+ a3);
    
}
let f1=prompt("Enter the first number in the function:  ")

console.log("First Number in the function  is",+ f1);

let f2 = prompt("Enter the second number in the function:  ")

console.log("Second Number in the function is",+ f2);

f1=parseInt(f1);
f2=parseInt(f2);

subtraction(f1,f2);