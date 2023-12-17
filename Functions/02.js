// Function Experssion :it means assigning the function into a varaible


// const playSong = function () {
//     console.log("I love you");
// }

// // calling fundtion

// playSong();


// // // function experssion with parameter

// const sum = function (num1, num2) {
//     return num1 + num2;
// }

// let total = sum (5,7);
// console.log(total); //12

// // let total = sum (15, 27);
// // console.log(total); // 42

// // Question: find given number is odd or even (Using function experssion)
 
// const oddEvenCheck = function(number) {
//     if(number % 2==0){
//         return "even"
//     };
//     return "Odd";
// }

// console.log(oddEvenCheck(5));//Number is Odd
// console.log(oddEvenCheck(10));//Number is even

// // // Question: print true if number is even else false with simplier code

// const isEven = function (number) {
//     return number % 2 == 0;
// }

// console.log(isEven(6)); //true
// console.log(isEven(9)); //false

// Question function will take string and output should be first character

// const firstChar = function(str) {
//     return str[0];
// }

// console.log(firstChar("Manoranjan")); // M

// Question: You are given an array and target if target is present in array print its index else print -1

const findTarget = function(arr,target) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target)
        return i;
    }
    return -1;
}


const myArr = [2,3,6,8,67];
const myTarget = 6;

console.log(findTarget(myArr,myTarget));


// Function exepression are of two types
 
// type 1> named function expression
// let y = function greeting() {
//     console.log("Hi there I am named exprfession function")
// }
// y();

// type 2> un-named function expression
// let z = function () {
//     console.log("Hi there I am un-named expression function")
// }
// z();

/// Anonymous functions

// function () {
//     console.log("Hi there") // it will throw error
// }

//  function x1(callback) {
//     console.log(24);
//     callback();
// }
// x1(function (){
//     console.log(100)
// })

// callback function

// function x (callback) {
//     console.log(20);
//     callback();
// }
// x(y)

// function y() {
//     console.log(100)
// }
/*Note in the above example:
y is the callback function and
x is the higher order function*/