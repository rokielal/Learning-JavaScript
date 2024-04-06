// Functions
//functions are building blocks of the js language
//they are reusable block of codes

//syntax
// function functionName (){
    //body
// }

// function greetings() {
//     console.log("Hi");
//     console.log("How are you?");
//     console.log("Bye");

// }

// greetings(); // calling the functions or invocation
// greetings();

// function that gives sum of given 2 numbers

// let a = 10;
// let b = 20;

// function sum() {
//     total = a+b;
//     console.log(total);
// }
// sum();
// sum();
// sum();

// function that gives sum of any 2 numbers

// function sum(a,b) { // a and b are called "parameter"
//     total = a+b;
//     console.log(total);
// }
  
// sum(10,30); // 40  --> // passing value of a and b are called "arguments"  
// sum(15,40);  // 55
// sum(100,300); // 400 

// function that return the sum of any 3 numbers 

function sum(num1, num2, num3) {

    total = num1+num2+num3;

    return total;
}

// sum(10,20,30) // No output

// to get output we need to console

console.log(sum(10,20,30)); // 60 
