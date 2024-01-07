// loop : HTML collection 
//we get HTML collection from element selector

// const navItems = document.getElementsByTagName('a');

// console.log(navItems);
// it is HTML collection means array like.

// Simple for loop
// for(let i=0; i<navItems.length; i++){

//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "blue";
//     navItem.style.color = "yellow";
//     navItem.style.fontWeight = "bold";
// }

// for of loop

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "blue";
//     navItem.style.color = "yellow";
//     navItem.style.fontWeight = "bold";
// }

// we cannot use forEach method in html collection but we can convert it to Array by using Array.from

// let navItems = document.getElementsByTagName('a');

//  navItems = Array.from(navItems); // it will convert HTML collection to array, now we can use forEach loop
//  console.log(Array.isArray(navItems)) // true

// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "blue";
//     navItem.style.color = "yellow";
//     navItem.style.fontWeight = "bold";
// })


// loop : NodeList
//we get NodeList from query selector, here we can use all the loops

let navItems = document.querySelectorAll('a');

console.log(navItems); //NodeList[a, a, a]

// simple for loop
// for(let i=0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "blue";
//     navItem.style.color = "yellow";
//     navItem.style.fontWeight = "bold";
// }

// for of loop
for(let navItem of navItems){
    navItem.style.backgroundColor = "blue";
    navItem.style.color = "yellow";
    navItem.style.fontWeight = "bold";
}

// for Each method

navItems.forEach((navItem)=>{
    
    navItem.style.backgroundColor = "blue";
    navItem.style.color = "yellow";
    navItem.style.fontWeight = "bold";
    
})