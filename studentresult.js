var prompt = require('prompt-sync')();

let score=prompt("Enter your Score:  ")

console.log("My Score is",+ score);

if (score>=50){

    console.log("You are qualified and passed in the exam");
}

else{

    console.log("Sorry You Failed in the Exam");
}