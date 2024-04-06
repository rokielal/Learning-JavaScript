// Currying : Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

// let multiply = function (x, y) {
//   console.log(x * y);
// };

// // function Currying using bind method

// // let mutliplyby2 = multiply.bind(this, 2);
// // mutliplyby2(3);

// let mutliplyby2 = multiply.bind(this, 2, 3);
// mutliplyby2(4);
// // here 4 will be ignored

// let mutliplyby3 = multiply.bind(this, 3);
// mutliplyby3(3);

// function curring using closure

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let mutliplyby2 = multiply(2);
mutliplyby2(3);

let mutliplyby3 = multiply(3);
mutliplyby3(5);
