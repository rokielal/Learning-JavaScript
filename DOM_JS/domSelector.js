
//DOM Selector => 5 types

// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()
// document.querySelectorAll()

//selecting tag

// const h1 = document.getElementsByTagName('h1'); 
// it will select all the h1 present in HTML page in the form of array, in order to select specific h1 
    // we need to pass its index

// h1[0].style.color = 'red';
// console.log(h1);

// These is not recomemded as it will select all the element with same tag name in the console, eg below
// const list = document.getElementsByTagName('li');
// console.log(list); //[li, li, li, li]

// Selecting element by Id

// const list1 = document.getElementById('item1');
// console.log(list1)

// const list2 = document.getElementById('item2');
// console.log(list1)

// selecting using class

// const item = document.getElementsByClassName('new-class')

// console.log(item);

// querySelector can take any type of selectors like id,class, and tag
// if there are multiple tag of same name it will only select the first one

// // using querySelector and selecting element by tag name
// const listItem = document.querySelector('li');

// console.log(listItem);

// // using querySelector and selecting element by id name
// if there are multiple tag of same id it will only select the first one

// const listItem = document.querySelector('#item3');

// console.log(listItem);


// using querySelector and selecting element by class name
// if there are multiple class of same name it will onle select the first one

// const listItem = document.querySelector('.new-class');

// console.log(listItem);

// if we want to select all the elements  =>  it will select all the element in the form of array
// selecting all the tag with same tag name
// const listItem = document.querySelectorAll('li');

// console.log(listItem);

// select all the id with same id name
// const listItem = document.querySelectorAll('#item3');

// console.log(listItem);

// // selecting all class with same name
// const listItem = document.querySelectorAll('.new-class');

// console.log(listItem);























