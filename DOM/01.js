// DOM - Document Object Model
//In JavaScript, selectors are used to select and manipulate HTML elements in a document. They are primarily associated with the Document Object Model (DOM), which represents the structure of an HTML document as a tree of objects. Selectors allow you to target specific elements within this tree so that you can perform various operations on them, such as changing their content, style, or structure.
// Here are some common ways to select elements using selectors:
// 1 - getElementById: Selects an element by its unique ID.


// Select element using get element by ID

// console.dir(document.getElementById("main-heading")); // due to dir it will give object in return

// console.log(document.getElementById("main-heading")); // it will return in html type

const mainHeading = document.getElementById("main-heading");

console.log(mainHeading);