// Arrow Function


// const playSong = () => {
//     console.log("I love you");
// }

// const playSong = () => console.log("I love YOu");

// playSong();


// // Arrow function with parameter

// const sum = (num1,num2) => {
//     return num1 + num2;
// }

// More simplified code for one liner arrow function
const sum = (num1,num2) => num1 + num2;

let total = sum (5,7);
console.log(total); //12

// let total = sum (15, 27);
// console.log(total); // 42

// // Question: find given number is odd or even (Using Arrow function )
 
// const oddEvenCheck =(number) =>{
//     if(number % 2 == 0){
//         return 'odd';
//     }

//     return 'even'
// }

// console.log(oddEvenCheck(5));//Number is Odd
// console.log(oddEvenCheck(10));//Number is even

// // // Question: print true if number is even else false with simplier code

// const isEven = (number) => {
//     return number % 2 == 0;
// }
// console.log(isEven(6)); //true
// console.log(isEven(9)); //false

// more simplied arrow function
const isEven = number => number % 2 == 0;

console.log(isEven(6)); //true
console.log(isEven(9)); //false

// Question function will take string and output should be first character

const firstChar = (str) => {
    return str[0];
}

console.log(firstChar("Manoranjan")); // M

// Question: You are given an array and target if target is present in array print its index else print -1

const findTarget = (arr,target) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target)
        return i;
    }
    return -1;
}


const myArr = [2,3,6,8,67];
const myTarget = 6;

console.log(findTarget(myArr,myTarget));



