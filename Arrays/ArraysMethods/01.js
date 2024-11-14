// forEach
// map
// filter
// reduce

//forEach :In JavaScript, the forEach loop is a higher-order function that is used to iterate over elements of an array.
// forEach loop does not create a new array; it simply iterates over the existing one.
//If you need to create a modified array based on the elements of the original array, you might want to consider using methods like map.

// Note: forEach loop will take callback function as input

const numbers = [3, 4, 5, 7, 9];

function multiplyByTwo(number, index) {
  console.log("index is", index);
  console.log(
    `Nnumber at index ${index} is ${number} multiply by 2 is,`,
    number * 2
  );
}

// multiplyByTwo(numbers[0], 0);
// multiplyByTwo(numbers[1], 1);

for (let i = 0; i < numbers.length; i++) {
  multiplyByTwo(numbers[i], i);
}

// foreach will take input as a function
// numbers.forEach(multiplyByTwo);

let number = [1, 2, 3, 4, 5];

// // we can directly write funciton in forEach loop

// forEach loop with Annonymous function
// number.forEach(function(number, index) {
//   console.log(`Element at index ${index}: ${number}`);
// });

// forEach loop with Arrow function

number.forEach((number, index) => {
  console.log(`Element at index ${index}: ${number}`);
});

const users = [
  { firstName: "Manoranjan", age: 31 },
  { firstName: "Soni", age: 21 },
  { firstName: "Ivanshika", age: 1 },
];

// if we want to print the firstName of every user

// user.forEach(function(users){
//     console.log(users.firstName );
// })

// Same operation using for of loop
for (let user of users) {
  console.log(user.firstName);
}
