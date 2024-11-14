//to select div with id box-container
const boxesContainer = document.getElementById('box-container');
//to select button with id button
const button = document.getElementById('button');

// to add event to any element here we are adding even to button

button.addEventListener('click', () => {
    boxesContainer.classList.toggle('big'); 
    //Initially boxesContainer will have only box-container as class and
    // its properties but when we click big class is added (due to toggle)
     // and its properties are applied 
})

function createBoxes() {
    // we wanted to make 16 boxes

    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){

            const singleBox = document.createElement('div')
            // adding class to all box
            singleBox.className = 'box'

            singleBox.style.backgroundPosition 
            = `${-j * 125}px ${-i * 125}px`

            // appending each box to container
            boxesContainer.append(singleBox);
        }
    }
    
}
createBoxes();