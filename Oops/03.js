
// apply : In JavaScript, the apply method is similar to the call method, but it takes an array-like or iterable object as its second argument, which represents the arguments to be passed to the function. The apply method is part of the Function prototype.

// The primary use case for apply is when you have a function that expects an array of arguments, and you want to pass those arguments dynamically. This is especially useful when the number of arguments is not known beforehand or when the arguments are stored in an array-like structure.

// Note: In modern JavaScript, the use of apply is less common due to the availability of the spread syntax (...) for passing arrays of arguments directly. The spread syntax provides a more concise and readable alternative.

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

about.apply(user1, ['cricket', 'brocklie']) // Manoranjan 31 cricket brocklie
about.apply(user2, ['chess', 'fish']) // Soni 21 chess fish