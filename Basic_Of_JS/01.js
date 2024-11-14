// // console.log("hello world");

// // intro to variables

// // variables can store some information
// // we can use that information later
// // we can change that information later

// // declare a variable

// var firstName = "Manoranjan";

// // use a variable

// console.log(firstName);

// // change value

// firstName = "Ivanshika";
// console.log(firstName);

// function firstFunction() {
//   // Simulate a code delay
//   setTimeout(function () {
//     console.log("First function called");
//   }, 1000);
// }
// function secondFunction() {
//   console.log("Second function called");
// }
// firstFunction();
// secondFunction();
// console.log("----------------------");
function firstFunction(callback) {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
    callback();
  }, 1000);
}
function secondFunction() {
  console.log("Second function called");
}
firstFunction(secondFunction);
//   secondFunction();
