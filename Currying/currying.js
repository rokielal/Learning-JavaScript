// Currying : Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

// Why should currying be used?
// ✅ It makes a function pure which makes it expose to less errors and side effects.
// ✅ It helps in avoiding the same variable again and again.
// ✅ It divides one function into multiple functions so that one handles one set of responsibility.

// Question 1 : sum(2)(6)(1)

// Normal function
// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(2, 6, 1)); //9

// Curried function

function sum(a) {
  // takes one argument
  return function (b) {
    //takes second argument
    return function (c) {
      //takes third argument
      return a + b + c;
    };
  };
}

/* you can call it in two ways*/
// First way
console.log(sum(2)(6)(1)); // 9

// Second way
const sum1 = sum(2);
const sum2 = sum1(6);
const result = sum2(1);
console.log(result); // 9

// Interview tricky qustions
console.log(sum(2));
/* Output is 
    ƒ (b) {
    return function (c) {
      return a + b + c;
    };
  } 
  
  Why such output? 👆🏻 Because we passed only one argument.Hence, it will return the other two functions expecting other 2 arguments.
  */


console.log(sum(2)(6));
/* Output is
    ƒ (c) {
      return a + b + c;
    } 
    
    Why such output? 👆🏻 Because we passed only two argument.Hence, it will return the other one functions expecting third arguments.
    */
