// Program 4- Write a function that accepts interest, principle, and tenure and calculates EMI.

var prompt = require('prompt-sync')();

function interest(P,T,R,ROI) {

    let int = parseFloat((P*R)*ROI);
    return int;

}

let P1= parseInt(prompt("Enter pricipal amount: "));
console.log(P1);
let T1= parseInt(prompt("Enter Tenure in months: "));
console.log(T1);
let R1= parseFloat(prompt("Enter Rate of interest: "));
console.log(R1);

R1=parseFloat(R1/12/100);
console.log(R1);
let R2=parseFloat(Math.pow((1+R1),T1));
R2=parseFloat(R2/(R2-1));
console.log(R2);

let emi=parseFloat(interest(P1,T1,R1,R2));
console.log("Monthly EMI is:",+emi.toFixed(0));

