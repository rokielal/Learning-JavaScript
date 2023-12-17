// Difference between DOt and bracket notation

// const person = {
//     name: "manoranjan",
//     age: 32,
//     // person hobbies:['cricket','learninig','youtube'] // we cannot write key with two words as space comes in between, to solve this we can use square bracket

//     ["person hobbies"] :['cricket','learninig','youtube']
// }
// console.log(person);

// // console.log(person.person hobbies) // we cannot access key which is written with two words

// console.log(person["person hobbies"])

const person1 = {
    name: 'Soni',
}
// how to add any key value pair
const key = "email";

person1["Key"] = "soni@gmail.com";
console.log(person1); //name: 'Soni', Key: 'soni@gmail.com'  this is wrong in place of key we want email

// person1[key] = "soni@gmail.com";
// console.log(person1); // name: 'Soni', email: 'soni@gmail.com'