// This keyword inside eventListener callback

const btn = document.querySelector('.btn-headline');

// btn.addEventListener("click", function(){
//     console.log("you clicked me");
//     console.log("value of this");
//     console.log(this);
// })

// here the value of this will be button 

btn.addEventListener("click", ()=>{
    console.log("you clicked me");
    console.log("value of this");
    console.log(this);
})

// here in arrow function value of this will be window object