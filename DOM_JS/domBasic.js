

// DOM = Document object model
// According to DOM, every HTML element is an object. 
// Webpage is a document we can display in browser window or HTML source
// Browser convert the webpage in the form of object so that we can manipulate them

// console.log(document) // it will give object representation of whole webpage
// console.log(document.URL) // it will give url of the webpage

// console.dir(document) // dir will give all the directories of object

// document.title="abcd" // it will change the title of webpage

// console.log(document.all) // it will give all the element in HTML in the form of array

                                // Methods

        // Adding of text

// const body = document.body;

// body.append("hellow");

// body.appendChild("dsd");// error

// Diff b/w append and appendChild is appendChild cannot add text

            // creating a div 
// const body = document.body;
// const div = document.createElement('div')

// // to write text inside the added div
// // two properties

// // div.innerHTML = 'Javascript'
// div.textContent ='I am Javascript'

// // to add div to HTML
// // body.append(div);
// body.appendChild(div);

                        // DOM Selector

// 5 ways

// const div = document.querySelector('div');

// console.log(div.innerHTML)
// // console.log(div.textContent)


// const body = document.body; // to select body of HTML

// const div = document.createElement('div'); // creating div

// div.innerText ="Hellow World"; // adding text to div

// body.appendChild(div); // adding div to body

// to make hellow world strong or bold or italic etc
// creat new element strong
// add text to strong
// append/add to strong to div 
// finally append/add whole div to body

// const body = document.body;
// const div = document.createElement('div');
// const strong = document.createElement('strong');
// strong.innerText = "I love JavaScript";

// div.append(strong);
// body.appendChild(div);

// Easy way we have to use innerHTML

// const body = document.body;
// const div = document.createElement('div');

// div.innerHTML = '<strong> <i> JavaScript is cool </i></strong>';

// body.appendChild(div);

                // Removing of element

//Selecting element from HTML

// const div = document.querySelector('div');
// const spanOne = document.getElementById('one');
// const spanTwo = document.getElementById('two');

// // // spanTwo.remove(); // one way to remove

// // // Removing with using parent element
// // div.removeChild(spanOne);


// //attribute methods and properties

// // console.log(spanOne.getAttribute('name')); //span-one
// // console.log(spanOne.getAttribute('id')); //one

// // set attribute name
// spanOne.setAttribute('name','abcde');//now spanOne name will be change to abcde

// for class

// spanOne.classList.add('new-class');
// spanTwo.classList.remove('new-class');
// //Or
// spanTwo.className = 'new-name';


// spanOne.classList.toggle('new-class'); // if class is already there it will remove it and if it is not 
                                                //there is will add it

                //styles

// spanOne.style.color='tomato';
// spanTwo.style.backgroundColor ='green';




















