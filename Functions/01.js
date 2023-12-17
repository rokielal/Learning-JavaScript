// Functions :-  (Basic)
// functions are building blocks of the js language
//they are reusable block of codes
//Functions in JavaScript are first-class citizens; they can be assigned to variables.

 // ***** Function Decleration

// function playSong () {
//     console.log("I love you");
// }

// // calling fundtion

// playSong();
// // playSong();
// // playSong();

// // function decleration with parameter

// function sum (num1, num2) {
//     return num1 + num2;
// }

// let total = sum (5,7);
// console.log(total); //12

// let total = sum (15, 27);
// console.log(total); // 42

// let total = sum ();
// console.log(total); // NAN because if we do not pass any value it num1 and num2 will be undefined and undefined + undefined = NAN

// Question: find given number is odd or even

// function oddEvenCheck (number) {
//     if(number % 2 == 0){
//         return "Number is even"
//     }

//     return "Number is Odd"
// }

// console.log(oddEvenCheck(5));//Number is Odd
// console.log(oddEvenCheck(10));//Number is even

// // Question: print true if number is even else false with simplier code

// function isEven (number) {
//     return number % 2 == 0;
// }

// console.log(isEven(6)); //true
// console.log(isEven(9)); //false

// Question function will take string and output should be first character

// function firstChar (str) {
//     return str[0];
// }

// console.log(firstChar("Manoranjan")); // M

// Question: You are given an array and target if target is present in array print its index else print -1

// function findTarget (arr,target) {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == target){
//             return i;
//         }
//     }
//     return -1;
// }

// const myArr = [2,3,6,8,67];
// const myTarget = 6;

// console.log(findTarget(myArr,myTarget));

// function expression : it means assigning the function into a varaible

