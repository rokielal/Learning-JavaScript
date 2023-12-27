// bind : In JavaScript, the bind method is used to create a new function that has a specified this value and, optionally, a fixed set of arguments. Unlike call and apply, which immediately invoke the function, bind returns a new function with the specified context and arguments bound to it, allowing you to later invoke it.

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

const myfunc1 = about.bind(user1, "cricket", "maggi");
myfunc1(); 

const myfunc2 = about.bind(user2, "Luddo", "Pasta");
myfunc2(); // Soni 21 Luddo Pasta
