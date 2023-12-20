// let keyword 
// declare variable with let keyword 

let firstName = "Manornajan";
console.log(firstName);

// we should use let to declare any variable in JS

// block scope vs funtion scope (covered later in this video)

// declare constants 

const pi = 3.14;
console.log(pi);

// we cannot change constant variable

pi = 3.15; // it will throw error

/** In JavaScript, var, let, and const are used to declare variables, but they have some key differences in terms of scope, hoisting, and reassignment.
 
1: var:

Variables declared with var are function-scoped, meaning they are only visible within the function where they are defined.
var variables are hoisted to the top of their scope. This means that you can use a variable before it's declared in the code, but the value will be undefined until the actual declaration is reached during runtime.
var allows redeclaration of variables within the same scope.

2: let:

Variables declared with let are block-scoped, meaning they are only visible within the block (enclosed by curly braces) where they are defined.
let variables are also hoisted, but unlike var, they are not initialized until the actual declaration is reached. Accessing a let variable before its declaration results in a ReferenceError.
let does not allow redeclaration of variables within the same scope.

3: const:

Variables declared with const are block-scoped, similar to let.
const variables must be assigned a value at the time of declaration, and once assigned, their value cannot be reassigned. However, the contents of objects and arrays declared with const can still be modified.
Like let, const is also not redeclarable in the same scope.

In modern JavaScript development, it is recommended to use const by default and only use let when you need to reassign a variable. Using var is generally avoided due to its function-scoping and hoisting behavior, which can lead to unexpected issues in more complex code. The use of const helps in writing more predictable and maintainable code by preventing accidental reassignment of variables.
 */