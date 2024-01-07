// select element using query selector

// 2 - querySelector: Selects the first element that matches a specified CSS selector.

// const mainHeading = document.querySelector("#main-heading");
// // it will select ID

// console.log(mainHeading);

// const header = document.querySelector('.header');

// console.log(header);

// const navItem = document.querySelector('.nav-item');

// console.log(navItem); // It will give only first nav item

// 3 - querySelectorAll:Selects all elements that match a specified CSS selector. Returns a NodeList.

const navItem = document.querySelectorAll('.nav-item');

console.log(navItem); // it will return all the element having class name nav-item