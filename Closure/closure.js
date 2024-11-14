// Example 1
// This code will print 1 after 3 sec
// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
// }

// x();

// Example 2
// In this code I am first will be printed first than after 3 sec 1 will be printed
// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);

//   console.log("I am first");
// }

// x();

// In the above code function inside setTimeout forms a closure and it remeber the reference of i, than setTimout will wait in callback queue until other code executes in callStack and once callStack becomes empty and 3 sec over setTimout pushes to callstack and print the value of i

// Example 3
// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);

//   i = 100;
//   console.log("I am first");
// }

// x();

//   Since both i are in Global memory the value of will be updated to 100 and the output will be
// I am first than after 3 sec 100

// Example 4
// Question : print 1 to 5 after 1 sec print 1 and after 2 sec print 2 than after 3 sec print 3 and so on till 5

// function printAfterInterval() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function (){
//       console.log(i);
//     }, i * 1000);
//   }
// }

// printAfterInterval();

// The above code will not print 1 to 5 instead it will print 6 five times after the given interval because when loop runs the value of i increase from 1 to 6 and atlast the value of i will be 6, since the i is in global memory the last value of i will be 6.

// To solve that problem we can use let instead of var because in let every time loop runs it will create new memory with new copy of i, because let is block scoped and atlast when setTimout runs function inside it form closure with every i and prints its value from the respective memory

// function printAfterInterval() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// printAfterInterval();

// We can use arrow function instead of normal function
// function printAfterInterval() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// printAfterInterval();

// Printing using var only:  to do so we have to wrap the setTimout inside another function where we can pass i as parameter, so everytime loop runs it will create a new memory for i and dunction inside setTimout will forms closure to its.

function printAfterInterval() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }

    close(i);
  }
}

printAfterInterval();
