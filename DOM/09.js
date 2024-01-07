//classList ,add and remove, toggle classes

const sectionTodo = document.querySelector('.section-todo');

// To check how many classes are present in the section
console.log(sectionTodo.classList);

// to give new class

sectionTodo.classList.add('bg-dark');
console.log(sectionTodo.classList);

// to remvoe class

sectionTodo.classList.remove('bg-dark');
console.log(sectionTodo.classList);

// Toggle :- Toggle functionality is the class is present it will remove it or if the class is not present it will add it 

sectionTodo.classList.toggle('bg-dark');

