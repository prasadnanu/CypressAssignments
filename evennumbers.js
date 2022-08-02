//Program 5- Print even numbers from 0-100


// Using for loop
for (let i = 0; i <=100; i++) {
   
    if(i%2==0){

        console.log(i);
    }
    
}

//Using while loop

 let num=0

while (num<=100) {

    if(num%2==0){

        console.log(num);
    }

num++;
    
}

//Using do.while loop

let n=0

do{
    if(n%2==0){

        console.log(n);
    }
n++
}while(n<=100)