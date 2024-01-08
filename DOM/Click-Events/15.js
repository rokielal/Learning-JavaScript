// Event object and practice with click events

const allButtons = document.querySelectorAll('.my-buttons button')

// firstButton.addEventListener("click", function(){
//     console.log(this);
// })

// change the background color to yellow and color to gray when clicked


allButtons.forEach((button)=>{
    button.addEventListener("click", function(e){
        // backgoundColor = "yellow";

        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "red";
    })
})


