// methods

// mentods are function inside object

// const person = {
//     firstName: "Ranjan",
//     age: 18,
//     about: function(){
//         console.log(this);
//         //{firstName: 'Ranjan', age: 18, about: ƒ}

//         console.log(`Person name is ${this.firstName} and age is ${this.age}`) //Person name is Ranjan and age is 18
//     }
// }

// person.about();

// function personInfo() {
//     console.log(`Person name is ${this.firstName} and age is ${this.age}`);
// }

// const person1 = {
//     firstName: "Manoranjan",
//     age:32,
//     about: personInfo
// }

// const person2 = {
//     firstName: "Soni",
//     age:22,
//     about: personInfo
// }

// const person3 = {
//     firstName: "Ivanshika",
//     age:1,
//     about: personInfo
// }

// person1.about(); //Person name is Manoranjan and age is 32

// person2.about(); //Person name is Soni and age is 22

// person3.about(); //Person name is Ivanshika and age is 1

// Window Object

// console.log(this);
// console.log(window);

// both will give output as window object

// function myFunc() {
//     console.log(this);
// }

// myFunc(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// window object because myFunction is called by window object

// window.myFunc(); // same output

"use strict"
function myFunc() {
    console.log(this);
}

myFunc(); // undefined
window.myFunc() // Window {window: Window, self: Window, document: document, name: '', location: Location, …}