// Question 2:
// evaluate sum(2)(3);
// evaluate difference(2)(3);
// evaluate product(2)(3);
// evaluate divide(2)(3);

function evalute(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "sum":
          return a + b;
          break;
        case "difference":
          return a - b;
          break;
        case "multiply":
          return a * b;
          break;
        case "divide":
          return a / b;
          break;
        default:
          return "No valid input";
      }
    };
  };
}

// console.log(evalute("difference")(2)(3));

// This is used case of currying 
const mul = evalute("multiply");
console.log(mul(2)(4)); // 8
console.log(mul(2)(8)); //16

const div = evalute("divide");
console.log(div(4)(2)); // 2
console.log(div(32)(8)); //4

const sum = evalute("sum");
console.log(sum(4)(8)); //12
console.log(sum(32)(2)); //34

const sub = evalute("difference");
console.log(sub(8)(4)); //4
console.log(sub(89)(6)); //83
