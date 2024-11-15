// Write a currying function that takes infinite arguments.

// Question 3 : add(2)(4)(5)(6).....(n)

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    else return a;
  };
}

console.log(add(2)(3)(8)(6)());

// Explination : Here
// first we are passing 2 in a and 3 in b than checking b is present or not if b is present we are again returning the function add again with the sum of a+b = 5
// Now again add function will run from starting and a value will be 5 and b value will be 8 again we will check b is present or not if b is present we are again returning the function add  with the sum of a+b = i.e 5+8=13
// Now again add function will run from starting and a value will be 13 and b value will be 6 again we will check b is present or not if b is present we are again returning the function add  with the sum of a+b = i.e 13+6=19
// Now again add function will run from starting and a value will be 19 and b value will be () again we will check b is present or not now b is not present in this case we are directly returning a whose value is 19.
// So the ouput is 19
