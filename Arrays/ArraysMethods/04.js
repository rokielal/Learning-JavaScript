// Reduce method:  In JavaScript, the reduce function is an array method that is used to reduce the elements of an array to a single value. It iterates over each element of the array and applies a callback function to accumulate the results into a single value. The callback function takes four arguments: accumulator, current value, current index, and the array itself.

// Syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

/*callback: A function that is called for each element in the array, taking four arguments.

accumulator: The accumulated result of the previous iterations.
currentValue: The current element being processed in the array.
currentIndex: The index of the current element being processed.
array: The array on which reduce was called.
initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value, and iteration starts from the second element. */

// Example 1: sum of all number in given array using reduce method

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

console.log(sum);

// How it is working

// accumulator      // current value      // return
//      1                   2                   3
//      3                   3                   6
//      6                   4                   10
//      10                  5                   15

/* initinal accumulator will take first value of given array and currentValue takes 2nd value after first iteration accumulator will takes the return of the 1st iteration and currentValue will takes the next elemant of the array and so on..... */

// Note : if we want to set initial accumulator to any value we can do that also
const number = [1,2,3,4,5];

const total = number.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},100);

console.log(total);

// How it is working
// Here accumulator initial value will be 100

// accumulator      // current value      // return
//      100                 1                  101
//      101                 2                  103 
//      103                 3                  106
//      106                 4                  110
//      110                 5                  115

//Example 2:  Add sum of item price from shopping list

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0)

console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000