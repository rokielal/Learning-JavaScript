// for loop in array

// let arr = ["apple", "mango", "banana"];

// for(let i = 0; i <= arr.length-1; i++){
//     // console.log(arr[i]);
//     console.log(arr[i].toUpperCase())
// }

// let arr = ["apple", "mango", "banana", "orange"];

// // we need to store the array into new array in upper case

// let newArray = [];
// for(let i=0; i<=arr.length-1; i++){
//     newArray.push(arr[i].toUpperCase())
// }

// console.log(newArray); //['APPLE', 'MANGO', 'BANANA', 'ORANGE']

// // use const for creating array

// heap memory ["apple", "mango"] 0x11

// const fruits = ["apple", "mango"]; // 0x11
// fruits.push("banana");
// console.log(fruits);

// while loop in array 
// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];
// let i = 0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);


// for of loop in array
// for of loop iterate through the loop and return the item
// const fruits = ["apple", "mango", "grapes"];

// for(let fruit of fruits){
//     console.log(fruit);
// }

// for in loop
// for of loop iterate through the loop and return the index
const fruits = ["apple", "mango", "grapes"];

for(let index in fruits){
    // console.log(index); // it will give index
    console.log(fruits[index]); //  it will give elements
}

