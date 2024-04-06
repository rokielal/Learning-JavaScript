/* Write a JavaScript function createDiv(width, height, text) that creates and adds a new div element inside 
the #container div with the specified width and height. The div element should have text as its text content.

Note: Do not modify the HTML code

Note: width and height which are passed as arguments to the createDiv function do not contain the unit. 
Make sure to add the unit of "px" to it before setting the values */




function createDiv (width, height, text) {

    const containerdiv = document.getElementById('container');
    
    const newDiv = document.createElement('div');
    
    newDiv.style.width = width+'px';
    
    newDiv.style.height = height+'px';
    
    newDiv.innerText = text;
    
    containerdiv.appendChild(newDiv);
    
    }
    
    createDiv(100, 100, 'new div');
    
    createDiv(100, 100, 'second new div');