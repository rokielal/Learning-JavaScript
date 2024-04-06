



//function decleration
// function x () {
//     return 20
// }

// console.log(x());

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

// Function exepression

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

// Anonymous functions

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

//arrow function

// let message = function sayHi() {
//     console.log("Hi there I am normal function")
// }

// let message = () => console.log("Hi I am Arrow function")
// message()

// let sum = (a,b) => a+b;

// console.log(sum(23,45));

// IIFE - Immediately invoked function expression
// functions expression are immediately executed after being defined

// (function () {
//     console.log('Hi there I am IIFE anonymous function')
// })()


// // Question

// console.log(add(10,20))// 20
// console.log(sum(100,200))// error : Uncaught ReferenceError: Cannot access 'sum' before initialization


// function add(a,b){
//     return a+b;
// }

// let sum = function(num1, num2){
//     return num1+num2;
// }
