// get multiple elements using getElements by class name


// const navItems = document.getElementsByClassName('nav-item')

// console.log(navItems); // it will return html collection
// // index proerty
// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(navItems[2]);

// console.log(navItems.length); // 3

// // It will return Array like object having few array properties like index through which we can iterate, length.

// console.log(typeof navItems); // object
// console.log(Array.isArray(navItems) ); // false, means it is not array

// get multiple elements using querySelectorAll
const navItems = document.querySelectorAll('.nav-item')

console.log(navItems); // it will Node list, it is also Array like object means we can use index, iterate and length property

// Note: Different between HTML collection and NodeList