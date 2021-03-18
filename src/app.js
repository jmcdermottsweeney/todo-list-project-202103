class TodoItem {
    constructor(description) {
        this.description = description;
        this.status = false;
    }

    switchStatus() {
        if (this.status == false) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}

class TodoList {
    constructor() {
        this.arr = [];
    }

    // add a todo item to the list
    addTodo(newItem) {
        this.arr.push(newItem);
    }

    // returns the object at index i
    getTodo(i) {
        return this.arr[i];
    }

    // remove a todo item from the list
    removeTodo(i) {
        this.arr.splice(i, 1);
    }

    // remove all objects in arr
    clearList() {
        this.arr.splice(0);
    }

    //see all objects in the current array
    seeList() {
        for (let i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i]);
        }
    }
}

//create a new empty TodoList when the program runs
let myList = new TodoList();
let alertMsg = document.getElementById('todo-list__alert-message');

const form = document.getElementById('todo-list__form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let userInput = document.getElementById('todo-list__input');
    if (checkInput(userInput)) {
        let newTodo = new TodoItem(userInput.value.toString().trim());
        myList.addTodo(newTodo);
        createTodoNode(newTodo, myList);
        userInput.value = '';
    }
});

let testVar = document.getElementById('test-id');
testVar.style.textDecoration = 'line-through';


// validates the given input for a todo item is not a blank string,
// and then creates a new TodoItem and adds it to myList
function checkInput(input) {
    let inputVal = input.value.toString().trim();
    if (inputVal == '') {
        alertMsg.innerHTML = 'Please input a valid string.';
        input.value = '';
        return false;
    } else {
        alertMsg.innerHTML = 'Add an item onto your todo list.';
        return true;
    }
}


// resets the form and removes objects from the myList array
function resetForm() {
    document.getElementById('todo-list__form').reset();
    myList.clearList();
    let parent = document.getElementById('todo-list');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function createTodoNode(todo, list) {
    function setAtrb(el, attribute) {
        for (let key in attribute) {
            el.setAttribute(key, attribute[key]);
        }
    }

    const container = document.createElement('div');
    setAtrb(container, {'class': 'todo-item__container'});

    // check icon
    const iconWrapper = document.createElement('div');
    setAtrb(iconWrapper, {'class': 'todo-item__icon-wrapper'});
    const checkIcon = document.createElement('span');
    setAtrb(checkIcon, {'class': 'todo-item__check-icon far fa-check-square'});
    iconWrapper.appendChild(checkIcon);

    // input
    const inputWrapper = document.createElement('div');
    setAtrb(inputWrapper, {'class': 'todo-item__input-wrapper'});
    const input = document.createElement('input');
    const id = 'todoItem ' + (list.arr.indexOf(todo) + 1);
    setAtrb(input, {'id': id, 'type': 'checkbox', 'name': 'todo', 'value': todo.description});
    const label = document.createElement('label');
    setAtrb(label, {'class': 'todo-item__label', 'for': id});
    const description = document.createTextNode(todo.description);
    label.append(description);

    // delete icon
    const deleteWrapper = document.createElement('div');
    setAtrb(deleteWrapper, {'class': 'todo-item__delete-wrapper'});
    const deleteLink = document.createElement('a');
    deleteLink.innerHTML = 'Remove this Item';

    setAtrb(deleteLink, {'class': 'todo-item__delete-link', 'href': '#'});
    deleteWrapper.appendChild(deleteLink);
    inputWrapper.append(input, label, deleteWrapper);

    container.append(iconWrapper,inputWrapper);
    document.getElementById('todo-list').appendChild(container);
}

// creates the node elements for a todo item
// function createTodoNode(todo, list) {


//     // delete todo item button
//     let checkboxDelete = document.createElement('span');
//     checkboxDelete.classList.add('todo-item__delete');

//     // put together node elements
//     checkboxLabel.appendChild(description);
//     container.appendChild(checkboxInput);
//     container.appendChild(checkboxLabel);
//     document.getElementById('todo-list').appendChild(container);

//     let lorem = document.getElementById(radioId);
//     lorem.addEventListener('change', function () {
//         todo.switchStatus();
//         if (todo.status) {
//             checkboxLabel.style.textDecoration = 'line-through';
//         } else {
//             checkboxLabel.style.textDecoration = 'none';
//         }
//         console.log(todo.status);
//     });
// }