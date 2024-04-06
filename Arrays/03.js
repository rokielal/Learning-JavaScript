// primitive VS reference type

// primitve vs reference data types
// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);


// reference types 
// array 
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);

// ---------------------Notes----------------

/* Primitive Types:
Primitive types in JavaScript are simple, immutable data types. They are directly operated upon and stored in memory. There are six primitive data types in JavaScript:

Boolean: Represents true or false values.
Null: Represents an intentional absence of any object value.
Undefined: Represents an uninitialized variable or a variable with no assigned value.
Number: Represents numeric values. It includes integers and floating-point numbers.
String: Represents sequences of characters enclosed in single or double quotes.
Symbol: Introduced in ECMAScript 6, symbols are unique and immutable primitive values.

Primitive types are passed by value, meaning that when you assign a primitive value to a variable or pass it as an argument to a function, a copy of the value is created.

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

In JavaScript, references work by pointing to the memory location where an object is stored rather than directly containing the object's data. When you create an object or an array, a reference to the memory location of that object is assigned to the variable. This is true for all reference types, including objects, arrays, functions, and others.

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
When you access the name property through either object1 or object2, the change is reflected. */

/* It's important to note that primitive types (such as numbers, strings, booleans) are passed by value, meaning that a copy of the value is made when assigning it to another variable. However, reference types are passed by reference, meaning that the reference to the memory location is passed around. */