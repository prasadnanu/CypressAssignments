/*Program 7- Create an array of length 5 and store below numbers 
       1,11,111,222,555 . Write a program to calculate the average of numbers*/


//Directly from array initialisation

var prompt = require('prompt-sync')();
let array1=[1,11,111,222,555];
let avg = (array1[0]+array1[1]+array1[2]+array1[3]+array1[4])/5;
console.log(avg);

// Getting array values as user inputs

let input1=[];

let length1,sum1=0,avgnum;
length1=parseInt(prompt("Enter the length of an array: "));

for (let i = 0; i <length1; i++) {
    
    input1[i]= parseInt(prompt("Enter the numbers in the array"));
    
}
console.log(input1);

for (let j = 0; j < length1; j++) {
    sum1+=input1[j];
    
}
console.log(sum1);
  avgnum=sum1/length1;
  console.log("Average of ",+length1,"numbers is: ",+avgnum);