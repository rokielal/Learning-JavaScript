// Intro to events
// click, button press, mouse over etc

// three ways to add event

//1-  directly using onclick on html but it is not used now

//2- 

// const btn = document.querySelector('.btn-headline');

// btn.onclick = function(){
//     console.log("You click me");
// }

// 3- addEventListner method

// const btn = document.querySelector('.btn-headline');

// function clickMe(){
//     console.log("You clicked me!!!!")
// }
// btn.addEventListener("click", clickMe );


const btn = document.querySelector('.btn-headline');

btn.addEventListener("click", ()=> console.log("You clicked Me!!!!") );