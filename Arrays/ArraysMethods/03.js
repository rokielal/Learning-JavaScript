// Filter method : In JavaScript, the filter() method is another higher-order function that is used to create a new array containing elements that pass a certain condition. It operates on each element of the original array and includes only those elements that satisfy the specified condition.

// Note: filter method also take callback function as input

const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(function(numb) {
//     return numb % 2 === 0;
// })

// console.log(evenNumbers); // [2, 4]

// using arrow function
const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
})
console.log(evenNumbers); //[2, 4]

// As there is only one parameter we can further modify the arrow function by removing bracket, curly bracket and return keyword

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); //[2, 4]

// ----------------Notes------------------
// In this example, the filter() method is used to create a new array (evenNumbers) that includes only the even numbers from the original numbers array.

// The callback function inside the filter() method should return true for elements that should be included in the new array and false for elements that should be excluded.

// The filter() method is useful when you want to selectively include or exclude elements based on a specific condition, and it provides a more concise and expressive way to filter arrays compared to using a for loop.




