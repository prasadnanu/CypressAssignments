// Program 2- Write a program to calculate the sum of 5 numbers.


var prompt = require('prompt-sync')();

//without functions,loops
let a=10,b=15,c=20,d=25,e=30;
let result = (a+b+c+d+e);
console.log(result);


//Using functions and without user prompt

function sum(a1,a2,a3,a4,a5) {

    let fresult = (a1+a2+a3+a4+a5)/5;
    console.log(fresult);
}
sum(1,2,3,4,5);

//Using functions and with user prompt

function sum1(x1,x2,x3,x4,x5) {

    let fresult1 = (x1+x2+x3+x4+x5);
    console.log("Sum of five numbers is ",+fresult1);
}
let f1=parseInt(prompt("Enter the first number in the function:  "))

console.log("First Number in the function is",+ f1);

let f2 =parseInt( prompt("Enter the second number in the function:  "))

console.log("Second Number in the function  is",+ f2);

let f3 = parseInt(prompt("Enter the third number in the function:  "))

console.log("Third Number in the function  is",+ f3);

let f4 = parseInt(prompt("Enter the Fourth number in the function:  "))

console.log("Fourth Number in the function  is",+ f4);

let f5 = parseInt(prompt("Enter the fifth number in the function:  "))

console.log("Fifth Number in the function  is",+ f5);

sum1(f1,f2,f3,f4,f5);

// Using loops

let rows,sumnum;
let sum2=0;
rows = prompt("Enter the number of rows which is required to find the sum:  ")

for(let i=1;i<=rows;i++){

    sumnum = parseInt(prompt("Enter the number in the function:"));
    console.log("Entered ",+i ,"number is",+ sumnum);
    sum2= sum2+sumnum;

}

let sumresult = sum2;
console.log("Sum of entered",+rows," numbers is "+sumresult);