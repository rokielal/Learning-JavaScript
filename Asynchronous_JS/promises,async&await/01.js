//promise: A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a cleaner and more structured way to handle asynchronous code compared to traditional callback-based approaches.

/*The Promise object has three states:

Pending: The initial state; the promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation encountered an error, and the promise has a reason for the failure. */

// Example below

// const bucket = ['cofee', 'rice', 'vegetable', 'chips','salt'];

// // Produce promise
// const food = new Promise((resolve,reject)=>{
//     if(bucket.includes("rice") && bucket.includes("salt") && bucket.includes("vegetable")){
//         resolve("We can eat");
//     }
//     else{
//         reject("Something is missing, we cannot do it!!!");
//     }
// })

// //consume promise
// //.then will take the value of resolve if promise condition is true and then method will always return promise
// //.catch will take the value of reject if promise condition is false

// food.then((value)=>{
//     console.log(value,"food");
// }).catch((value)=>{
//     console.log(value);
// });

// promise will be stored in microtask and it has more priority then callback queue means if in both callback queue and microtask queue data is there event loop will first run the data of microtask queue than callback queue
//example below

console.log("script start!!!!");
const bucket = ["cofee", "rice", "vegetable", "chips", "salt"];

// Produce promise
const food = new Promise((resolve, reject) => {
  if (
    bucket.includes("rice") &&
    bucket.includes("salt") &&
    bucket.includes("vegetable")
  ) {
    resolve("We can eat");
  } else {
    reject("Something is missing, we cannot do it!!!");
  }
});

setTimeout(() => {
  console.log("Hello from set timeout");
}, 1000);

for (let i = 1; i < 10; i++) {
  console.log(Math.random(), i);
}

food
  .then((value) => {
    console.log(value, "food");
  })
  .catch((value) => {
    console.log(value);
  });
console.log("script end!!!!");

/*
script start!!!!   (1st it will run)
 0.04661174662413048 1 
 0.28593050414265675 2
 0.06770364359753489 3
 0.7166763465494241 4
 0.6918099034650738 5        (for loop will run as it is in Global execution context and promise is kept 
                                in microtask queue and setTimeout is kept in callback queue)
 0.9271877907417776 6
 0.8336897535096379 7
 0.6230073754230263 8
 0.6883718940241472 9
 script end!!!!      (it will run now and GEC is now empty. As microtask has more priority than callback
                        now 1st promise will run than settimeout like below)
 We can eat food
 Hello from set timeout
 */

// Diagram attached with promise name

//  Promise chain

// new Promise(resolve, reject){
//     setTimeout(()=>{resolve(1)},1000)
// }

const data = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result * 3;
  })
  .then((result) => {
    console.log(result);
  });
