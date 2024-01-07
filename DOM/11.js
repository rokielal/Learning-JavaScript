// static list vs live list
// query selector will give static list
// getElement will give live list


const listItems = document.querySelectorAll('.todo-list li');
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

const ul = document.querySelector('.todo-list');
ul.append(sixthLi);
console.log(listItems);