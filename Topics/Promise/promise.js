//promise: A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a cleaner and more structured way to handle asynchronous code compared to traditional callback-based approaches.

/*The Promise object has three states:

Pending: The initial state; the promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation encountered an error, and the promise has a reason for the failure. */

// Example below

const bucket = ["cofee", "rice", "vegetable", "chips", "salt"];

// Produce promise

const food = new Promise((resolve, reject) => {
  if (bucket.includes("rice", "vegetable", "salt")) {
    resolve("We can eat food");
  } else {
    reject("Something is missing");
  }
});

//Consume promise

//.then will take the value of resolve if promise condition is true and .then method will always return promise
//.catch will take the value of reject if promise condition is false

// food
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

// promise will be stored in microtask and it has more priority then callback queue means if in both callback queue and microtask queue data is there event loop will first run the data of microtask queue than callback queue

//example below

// console.log("Start");
// const bucket2 = ["cofee", "rice", "vegetable", "chips", "salt"];

// const food2 = new Promise((resolve, reject) => {
//   if (bucket2.includes("rice", "vegetable", "salt")) {
//     resolve("We can eat food");
//   } else {
//     reject("Something is missing");
//   }
// });

// setTimeout(() => {
//   console.log("Hello from set timeout");
// }, 1000);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// food
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((val) => {
//     console.log(val);
//   });

// console.log("end");

//In modern JavaScript, Promises and async/await are commonly used to handle asynchronous code in a more organized and readable way. They provide a more structured and maintainable approach to dealing with asynchronous operations compared to traditional callback-based code.

// How function return promise

const bucket3 = ["cofee", "rice", "vegetable", "chips", "salt"];
function makeFood() {
  return new Promise((resolve, reject) => {
    if (bucket3.includes("rice", "salt", "vegetable")) {
      resolve("We can eat");
    } else {
      reject("Someting is missing");
    }
  });
}

// to return promise by function we have to write function name(here function name is makeFood) and call it by paranthesis

makeFood()
  .then((val) => {
    console.log(val, "food");
  })
  .catch((val) => {
    console.log(val);
  });
