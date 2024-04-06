// call, apply and bind

// const user1 = {
//     name: "Manoranjan",
//     age : 31,
//     about: function() {
//         console.log(this.name, this.age);
//     }
// }

// const user2 = {
//     name: "Soni",
//     age : 21,
    
// }

// if we want to get the about method for user2 but in user2 about is not defined we can borrow the about method from user1 by using call method.

// user1.about.call() // undefined undefined
// user1.about.call(user2); // Soni 21

// // Call method:  The primary benefit of using call is that it allows us to control the value of this explicitly when invoking a function. Call method is particularly useful in scenarios like borrowing methods from other objects.

// const user3 = {
//     name: "Ivanshika",
//     age : 1,
    
// }

// user1.about.call(user3) // Ivanshika 1

// Suppose we have parameter in about method
// const user1 = {
//     name: "Manoranjan",
//     age : 31,
//     about: function(hobby, favFood) {
//         console.log(this.name, this.age, hobby, favFood);
//     }
// }

// const user2 = {
//     name: "Soni",
//     age : 21,
    
// }

// user1.about.call(user2, "playing cricket", "Chicken"); // Soni 21 playing cricket Chicken

// we can remove the entire function out

function about(hobby, favFood) {
    console.log(this.name, this.age, hobby, favFood);
}
const user1 = {
    name: "Manoranjan",
    age : 31,
    
}

const user2 = {
    name: "Soni",
    age : 21,
    
}
 const user3 = {
    name: "Ivanshika",
    age: 2,

 }
about.call(user1, "football", "mutton"); //Manoranjan 31 football mutton
about.call(user2, "basketball", "paneer"); //Soni 21 basketball paneer
about.call(user3, "playing", "cerelac")