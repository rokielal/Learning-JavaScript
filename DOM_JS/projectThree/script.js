// variable

const form = getElement('addForm');
const todoList = getElement('todos');
const filter = getElement('filter');
const todo = getElement('todo');


        // even listener

// form submit
form.addEventListener('submit', addTodo);

// click event on delete
todoList.addEventListener('click', removeTodo);

// event for search we will use key up event
filter.addEventListener('keyup', filterTodos);

//function

//creating function to get element

function getElement(id){
    return document.getElementById(id);
}

function addTodo(e) {
    e.preventDefault(); // it will stop the webpage reload
    // alert('submited')

    //if empty user input then give a popup
        if(todo.value ==''){
            alert("Put valid todo");
            return;
        }

    // get the user input
    const newTodo = todo.value;
    // console.log(newTodo);

    //create a new li item
    const li = document.createElement('li');

    //add the classes to li
    li.className = 'todo-item';

    //add newtodo text into the li
        // li.textContent = newTodo;
        // or
        li.innerText = newTodo;

    //create a delete button
    const deleteButton = document.createElement('button');

    //add the same classes to the delete button
    deleteButton.className = 'delete-button delete';

    //add the text to the button
    // deleteButton.textContent = 'delete'
    deleteButton.innerText ='delete';

    //append button to li
    li.append(deleteButton);

    //append li to todolist
    todoList.append(li);

    //make user input empty
    todo.value = '';
}

function removeTodo(e) {
    if(e.target.classList.contains('delete')){  //this line will target only element which have class delete

        let result = confirm("Are you sure?")  // here we are confiming if user want to delete added element or not

        if(result == true){
            let li = e.target.parentElement; // here we are taking the whole list item to delete by taking parentElement properties
            // todoList.remove(li); // if we use only remove then all added todos will be deleted at once
            todoList.removeChild(li);
        }
        
    }

}

function filterTodos(e) {
    // alert('triggered')

    //convert it to lowercase

    let searchText = e.target.value.toLowerCase();
    console.log(searchText)

    //GET LIST ITEMS

    let listItems = document.getElementsByTagName('li');
    // console.log(listItems)

    //convert html collection into an array

    Array.from(listItems).forEach((item) => {
        console.log(item.firstChild.textContent)
        let todoName = item.firstChild.textContent;

        if (todoName.toLowerCase().indexOf(searchText) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })


}

// 'Todo 1' == 'todo 1' || 'ToDo 1'

// 'todo 1' === 'todo 1'
//either make lowercase all both uppercase before comparing