var prompt = require('prompt-sync')();

let score=prompt("Enter your Score:  ")

console.log("My Score is",+ score);

if (score>=90){

    console.log("Grade is", 'A');
}
else if(score<90 && score>=70){

    console.log("Grade is", 'B');
}
else if(score<70 && score>=50){
    console.log("Grade is", 'C')
}

else{

    console.log("Sorry You Failed in the Exam");
}