// Variabls
let count = 0;

const value =document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


//functions


//event listener

btns.forEach(function (btn) {
    // console.log(btn);
    
    btn.addEventListener('click', function(event){
        
        const changes = event.target.classList;

        // console.log(changes);

        if(changes.contains('increase')){
            count++;
        }
        else if(changes.contains('decrease')){
            count--;
        }
        else{
            count = 0;
        }

        // adding count to the value
        value.textContent = count;
    })
})