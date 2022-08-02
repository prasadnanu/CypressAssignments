var prompt = require('prompt-sync')();
function multiplication(a1,a2,a3) {

    let a4=a1*a2*a3;
    console.log("Multiplication of three numbers is",+ a4);
    
}
let f1=prompt("Enter the first number in the function:  ")

console.log("First Number in the function is",+ f1);

let f2 = prompt("Enter the second number in the function:  ")

console.log("Second Number in the function  is",+ f2);

let f3 = prompt("Enter the third number in the function:  ")

console.log("Third Number in the function  is",+ f3);

f1=parseInt(f1);
f2=parseInt(f2);
f3=parseInt(f3);

multiplication(f1,f2,f3);