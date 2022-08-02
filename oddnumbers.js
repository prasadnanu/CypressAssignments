//Program 5- Print odd numbers from 0-100


// Using for loop
for (let i = 0; i <=100; i++) {
   
    if(i%2==1){

        console.log(i);
    }
    
}

//Using while loop

 let num=0

while (num<=100) {

    if(num%2==1){

        console.log(num);
    }

num++;
    
}

//Using do.while loop

let n=0

do{
    if(n%2==1){

        console.log(n);
    }
n++
}while(n<=100)