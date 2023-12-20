// Map Method: 
// In JavaScript, the map() method is a higher-order function that is used to create a new array by applying a provided function to each element of the original array. It does not modify the original array; instead, it returns a new array containing the results of applying the provided function to each element.

// Note: map will also take callback function as input

const number = [2,3,4,5,6,7];

// const sqredNumb = number.map((numb)=>{
//     // console.log(numb * numb);
//     return numb * numb;
// })

// console.log("Original numbers", number); // [2, 3, 4, 5, 6, 7]
// console.log("Squared Numbers", sqredNumb); // [4, 9, 16, 25, 36, 49]

// In this example, the map() method is used to create a new array (squaredNumbers) where each element is the square of the corresponding element in the original numbers array.

const users = [
    {firstName: "Manoranjan", age: 31},
    {firstName: "Soni", age: 21},
    {firstName: "Ivanshika", age: 1},
]
// if we want to store users firtName in new array

const userFirstName= users.map((user)=>{
    return user.firstName;
})

console.log(userFirstName); //['Manoranjan', 'Soni', 'Ivanshika']