/**Destructuring the array in JavaScript simply means extracting multiple values from data stored in objects and arrays.  */

// Array destructering

// Example 1
let number = [1, 2, 3];

// Using array destructuring to assign values to variables
let [a, b, c] = number;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

/* In this example, the values 1, 2, and 3 from the numbers array are assigned to the variables a, b, and c using the square bracket notation on the left side of the assignment. */

//You can also skip elements in the array that you don't want to assign to variables:

// Example 2
let colors = ['red', 'green', 'blue'];

// Using array destructuring to skip the second element
let [firstColor, , thirdColor] = colors;

console.log(firstColor); // Output: red
console.log(thirdColor); // Output: blue

/* In Example 2, the second element of the colors array is skipped by leaving an empty slot in the destructuring pattern. */

// Array destructuring is commonly used in function parameter lists to easily extract values from arrays passed as arguments:

// Example 3
function getFirstAndLast([first, , last]) {
    return [first, last];
  }
  
  let result = getFirstAndLast(['apple', 'banana', 'orange']);
  console.log(result); // Output: ['apple', 'orange']

/* In Example 3, the getFirstAndLast function uses array destructuring in its parameter list to extract the first and last elements from the array passed as an argument. */

//Array destructuring can also be used with the rest parameter (...) to capture the remaining elements into a new array

// Example 4
let numbers = [1, 2, 3, 4, 5];

let [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

/* In Example 4, the ...rest syntax is used to capture the remaining elements of the array into a new array called rest. */
// Object destructering : Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a concise and readable way. 



// // Example 1
// let person = { firstName: 'John', lastName: 'Doe' };

// // Using object destructuring to assign values to variables
// let { firstName, lastName } = person;

// console.log(firstName); // Output: John
// console.log(lastName); // Output: Doe
/*In this example, the values of the firstName and lastName properties of the person object are assigned to the variables with the same names. */

//You can also provide default values in case a property is undefined:

// // Example 2
// let person = { firstName: 'John' };

// // Using object destructuring with default values
// let { firstName, lastName = 'Doe' } = person;

// console.log(firstName); // Output: John
// console.log(lastName); // Output: Doe (default value applied)

/* In Example 2, if the lastName property is not present in the person object, it will default to 'Doe'. */

// Example 3
let persons = {
    name: 'John',
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // Using object destructuring with nested objects
  let { name, address: { city, country } } = persons;
  
  console.log(name);    // Output: John
  console.log(city);    // Output: New York
  console.log(country); // Output: USA

  /* In Example 3, the address property is also destructured to get the city and country properties. */

  //Object destructuring is commonly used in function parameter lists to easily extract values from objects passed as arguments:

  // Example 4
function printPersonDetails({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  let person = { name: 'Alice', age: 30 };
  printPersonDetails(person); // Output: Name: Alice, Age: 30

  //In Example 4, the printPersonDetails function uses object destructuring in its parameter list to extract the name and age properties from the object passed as an argument.

  //Object destructuring is a powerful feature that enhances code readability and simplifies the process of working with objects in JavaScript.
