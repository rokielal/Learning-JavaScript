// Keypress 

//whatever we will type from keyboard it will be printed in console
const container = document.querySelector('body');

container.addEventListener('keypress', (e)=>{
    console.log(e.key);
})

// one liner

// document.body.addEventListener('keypress', (e)=>{
//     console.log(e.key);
// })

// mouseover event & mouseleave event

const button = document.querySelector('.btn-headline');

button.addEventListener("mouseover", ()=> console.log("mouse came"));
button.addEventListener("mouseleave", ()=> console.log("mouse leaved"));
