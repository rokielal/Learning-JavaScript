// What is callback function in JavaScript

// setTimeout(function () {
//   console.log("Timmer called");
// }, 5000);
// function x(y) {
//   console.log("X called");
//   y();
// }
// x(function y() {
//   console.log("Y called");
// });
// When we call a function and pass another function as argument is call callback function here function y is callback function

// JavaScript is a synchronous and single-threaded language is beacuse of callback only

// Blocking the main thread

// Power of Callbacks

// Deep about Event listners

document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Clicked");
});

// function xyz is callback function and when clicked it will be puhsed into callStack and executed

// Closures Demo with Event listners

// Scope Demo with Even listners

// Garbage Collection and removeEventListeners
