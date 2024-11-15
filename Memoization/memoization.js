/* What is Memoization? 
    --> Memoization is a optimization technique that can be used to reduce the time-consuming calculations by saving previous input's result to something called cache and returning the result from it. 
    
    Each time a memoized function is called, it checks if the data is present in cache, then it can be returned from it without executing the entire function. Otherwise the function is executed and then the result is added to the cache and returned. 
    
    Let's take an example of adding function with memoization,
*/

function cal(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// console.time();
// console.log(cal(6));
// console.timeEnd();

function memoizedFun(fun) {
  let cache = {};
  return function (...args) {
    let n = args[0];

    if (n in cache) {
      console.log("result from cache");
      return cache[n];
    } else {
      console.log("Calculating result for first time");
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
}
let efficientResult = memoizedFun(cal);
console.time();
console.log(efficientResult(5)); // Result for the first time
console.timeEnd();

console.time();
console.log(efficientResult(5)); // Result from cache
console.timeEnd();

console.log(efficientResult(9)); // Result for the first time

console.log(efficientResult(9)); // Result from cache

console.log(efficientResult(5)); // Result from cache
