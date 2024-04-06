// Basic of Javascript

// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// rules for naming variables

// you cannot start with number
// example :-
// 1value (invalid)
// value1 (valid)

// Difference betweeen let, cont and var

/** In JavaScript, var, let, and const are used to declare variables, but they have some key differences in terms of scope, hoisting, and reassignment.
 
1: var:

Variables declared with var are function-scoped, meaning they are only visible within the function where they are defined.
var variables are hoisted to the top of their scope. This means that we can use a variable before it is declared in the code, but the value will be undefined until the actual declaration is reached during runtime.
var allows redeclaration of variables within the same scope.

2: let:

Variables declared with let are block-scoped, meaning they are only visible within the block (enclosed by curly braces) where they are defined.
let variables are also hoisted, but unlike var, they are not initialized until the actual declaration is reached. Accessing a let variable before its declaration results in a ReferenceError.
let does not allow redeclaration of variables within the same scope.

3: const:

Variables declared with const are block-scoped, similar to let.
const variables must be assigned a value at the time of declaration, and once assigned, their value cannot be reassigned. However, the contents of objects and arrays declared with const can still be modified.
Like let, const is also not redeclarable in the same scope.

In modern JavaScript development, it is recommended to use const by default and only use let when we need to reassign a variable. Using var is generally avoided due to its function-scoping and hoisting behavior, which can lead to unexpected issues in more complex code.

The use of const helps in writing more predictable and maintainable code by preventing accidental reassignment of variables.
 */

// ** Difference between == and === equal operatot
// == check only number where === equal check number with data type

// ** Falsy values
// false
// ""
// null
// undefined
// 0

// truthy  values
// "abc"
// 1, -1

// ** Difference between break and continue keywords
// break Keyword : after break keyword code will not run further and comes out of the loop
// continue Keyword : in continue the code will skip the part where condition is met and continue in the loop

// Arrays
// 01.js - inro to Arrays :
//Ordered collection of item
// it is reference type
// it is object in JS

//  02.js - array push , pop
//push : add element at last
// pop : remove element from last and we can store it in any variable and use it

// array shift , unshift
// unshift :  it will add element at the starting
// shift : it will remove the element from starting

// Note : push and pop are faster than shift and unsift bcz push and pop are adding or deleting element from last no need to change the position of every element in array but as  shift and unsift are adding or deleting element from begning it has to move all the elements position in an array.

// 03.js - **** primitive VS reference type

/* Primitive Types:
Primitive types in JavaScript are simple, immutable data types. They are directly operated upon and stored in memory. There are six primitive data types in JavaScript:

Boolean: Represents true or false values.
Null: Represents an intentional absence of any object value.
Undefined: Represents an uninitialized variable or a variable with no assigned value.
Number: Represents numeric values. It includes integers and floating-point numbers.
String: Represents sequences of characters enclosed in single or double quotes.
Symbol: Introduced in ECMAScript 6, symbols are unique and immutable primitive values.

Primitive types are passed by value, meaning that when we assign a primitive value to a variable or pass it as an argument to a function, a copy of the value is created.

*/
let x = 10;
let y = x; // y gets the value of x, not a reference to x
x = 20;

console.log(x); // Output: 20
console.log(y); // Output: 10

/**In this example, the value 10 is directly stored in the variable x. When y is assigned the value of x, it gets a copy of the value, not a reference to the memory location. */

let name1 = "John";
let name2 = name1; // name2 gets the value of name1, not a reference to name1
name1 = "Jane";

console.log(name1); // Output: Jane
console.log(name2); // Output: John

/**Similarly, when working with strings, the values are directly stored in the variables, and assigning one to another creates a copy of the value. */

/*  Reference Types:

In JavaScript, references work by pointing to the memory location where an object is stored rather than directly containing the object's data. When we create an object or an array, a reference to the memory location of that object is assigned to the variable. This is true for all reference types, including objects, arrays, functions, and others.

*/
let object1 = { name: "John" };
let object2 = object1;

object1.name = "Jane";

console.log(object1.name); // Output: Jane
console.log(object2.name); // Output: Jane

/* In this example, object1 is assigned a reference to the memory location where the object { name: "John" } is stored. When object2 is assigned the value of object1, it also gets a reference to the same memory location. As a result, changes made to the object through either object1 or object2 are reflected in both variables.

Here's a step-by-step breakdown:

object1 is created and assigned a reference to the memory location of the object { name: "John" }.
object2 is assigned the value of object1, meaning it now holds a reference to the same memory location as object1.
The name property of the object is changed to "Jane" through object1.
When we access the name property through either object1 or object2, the change is reflected. */

/* It's important to note that primitive types (such as numbers, strings, booleans) are passed by value, meaning that a copy of the value is made when assigning it to another variable. However, reference types are passed by reference, meaning that the reference to the memory location is passed around. */

// 04.js how to clone array

// using slice method

//syntax => array.slice(startIndex, endIndex)

//=> it returns a new array from startIndex to endIndex but not including endIndex
// if 2 argument is not passed it goes till the end

//using concat

//syntax => array.concat(arg1, arg2....)
//creates a new array that includes values from others arrays

/**Destructuring in JavaScript simply means extracting multiple values from data stored in objects and arrays.  */
// Object destructering : Object destructuring is a feature in JavaScript that allows us to extract values from objects and assign them to variables in a concise and readable way. 

// Array Methods with example are in array method folder

// 
