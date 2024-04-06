
// let user1 = new Object(); // object constructor syntax

// let user2 = {}; // Object literal Syntax

// let user = {
//     name: "John",
//     age: 45,
//     greeting: "I am Student"
// }
// // console.log(user);
// // How to access it
// // 1 ) Dot notation
// console.log(user.name);
// console.log(user.age);
// console.log(user.greeting);

// delete user.age;  // Deleting
// console.log(user);

// user.age = 43; // Adding
// console.log(user); 

// If we have to declare property in multi word and how to access it

let user = {
    name: "John",
    age: 34,
    // like me: true; // it will throw error
    "like me": true
}

console.log(user);
// // console.log(user.like me); // throws error

// // 2) Square brackets
console.log(user["like me"])

user["likes music"] = true; // adding
console.log(user);

delete user["likes music"]; // deleting
console.log(user);