//Click event on multiple buttons

// here selected first button by its ID
// const firstButton = document.getElementById('one');

// firstButton.addEventListener("click", function(){
//     console.log("You clicked me")
// })

// here selecting all the buttons and running a loop

// const allButtons = document.querySelectorAll('.my-buttons button');

// for(let button of allButtons){
//     button.addEventListener('click', function(){
//         console.log("You clicked buttons");
//     })
// }

// If we want to add one addEventListener and perform different function for every button we can use this keyword because this will be different for all buttons

const allButtons = document.querySelectorAll('.my-buttons button');

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }

// forEach loop
allButtons.forEach((button)=>{
    button.addEventListener("click", function(){
        console.log(this.textContent);
    })
})