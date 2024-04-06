
// message = 'hello';
// console.log(message);

// let, const and var

// var user = 'John';
// console.log(user);

// var user = 'Peter'
// console.log(user);

// No errr we can change value in var

// let user1 = "john";

// let user1 ="Peter";

// It will give error, we cannot change the value in let

// const user1 = "john";

// const user1 ="Peter";

// // it will also give error

//case 2: Reassignment
// var message = "Greetings";
// message = "Hello World";
// console.log(message);  // No error

// let message1 = "Greetings";
// message1 = "Hello World";
// console.log(message1); // NO error

// const message2 = "Greetings";
// message2 = "Hello World";
// console.log(message2); // it will give error

//case:3
// Note: var is a function scope and let and const are blocked scope

// var message = 'Hello';
// {
//     var message = 'Greeting'; // This is called shadowing
// }

// console.log(message); // Greeting

// let message = 'Hello';
// {
//     let message = 'Greeting';
//     console.log(message); // Greeting
// }
// console.log(message); // Hello

// const message = 'Hello';
// {
//     const message = 'Greeting';
//     console.log(message); // Greeting
// }
// console.log(message); // Hello

// case 4:

// console.log(a);
// var a = 100; // undefined

// console.log(b);
// let b = 200;
//Uncaught ReferenceError: Cannot access 'b' before initialization

// console.log(c);
// const c = 34;
//Uncaught ReferenceError: Cannot access 'c' before initialization

// It means we cannot access let and const variable before initialization beacus they are in temporal dead zone but in
// case of var we can access the variable before initialization

