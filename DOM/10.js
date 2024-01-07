//Add HTML element using JavaScript

// Add new HTML elements to page



// innerHTML to add html element
// const todoList = document.querySelector('.todo-list');

// // console.log(todoList);
// // console.log(todoList.innerHTML);

// // todoList.innerHTML = '<li>New ToDo </li>' // it will add new todo and previous one will be removed

// // adding new Todo while before one not removed

// todoList.innerHTML += "<li> New todo1 </li>";
// todoList.innerHTML += "<li> New todo2 </li>";
// todoList.innerHTML += "<li> New todo3 </li>";

// when you should it, when you should not

//-> we should use innerHTML when we want to change the whole text but if we want to add new element we should not use innerHTML as it will have performance issue

// To add new element we can use document.createElement()
// append
// prepend
// remove
// before 
// after

// const newTodoItem = document.createElement("li");
// // console.log(newTodoItem);
// newTodoItem.textContent = "Newly added todo at last";

// const todoList = document.querySelector(".todo-list");

// todoList.append(newTodoItem); // it will add at last
// todoList.prepend(newTodoItem); // it will add at first

// to remove we have select first what to remove

// const todo1 = document.querySelector('.todo-list li'); // it will select the first todo element
// todo1.remove(); // it will delete the selected element


// before and after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "added new item by using after and before";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);


// clone nodes : it is used to clone the nodes

const ul = document.querySelector('.todo-list');
const li = document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);
// true will do deep cloning means text will also be copied
ul.append(li);
ul.prepend(li2);

