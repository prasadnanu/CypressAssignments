// Program 3- Write a program that accepts two strings (firstName and lastName) and print final string on the console.


var prompt = require('prompt-sync')();

let s1= prompt("Enter string1: ");
let s2= prompt("Enter string2: ");
console.log("first string is ", s1);
console.log("second string is ", s2);
let result = s1+" "+s2;
console.log(result);

//Using Function without user promt

function concat(a,b){

    let result1 = a+b;
    console.log("Final String is",result1);
}

concat("Prasad","Nangunoori");

//Using Function with user promt

function concat1(a1,b1){

    let result3 = a1+b1;
    console.log("Final String is",result3);
}
let fname1=prompt("Enter first name: ");
let lname1=prompt("Enter last name: ");
concat1(fname1,lname1);



//Using Object

let string1={firstName:"Prasad",lastName:"Nangunoori"}
let result2 = string1.firstName+string1.lastName;
console.log("String result is",result2);

