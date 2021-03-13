class TodoItem {
    constructor(description) {
        this.description = description;
        this.status = false;
    }

    switchStatus() {
        if (this.status == false) {
            this.statis = true;
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

let inputTodo = document.getElementById('input__todo-item');
let alertMsg = document.getElementById('input__alert-message');

const form = document.getElementById("todo-list__form");
form.addEventListener('submit', function handleForm(event) {
    event.preventDefault();
    checkInput();
});

// validates the given input for a todo item is not a blank string,
// and then creates a new TodoItem and adds it to myList
function checkInput() {
    let inputVal = inputTodo.value.trim().toString();
    if (inputVal == "") {
        alertMsg.innerHTML = 'Please input a valid string.';
        return false;
    } else {
        alertMsg.innerHTML = 'Add an item onto your todo list.';
        let newTodo = new TodoItem(inputVal);
        myList.addTodo(newTodo);
        createTodoNode(newTodo, myList);
        inputTodo.value = "";

        myList.seeList();
        console.log("====");

        return true;
    }
}

// creates the node elements for a todo item
function createTodoNode(todo, list) {
    // div container
    let container = document.createElement('div');
    container.classList.add('todo-item__container');

    // create id for input at index n
    let radioId = 'todo-item__' + (list.arr.indexOf(todo) + 1);

    // checkbox input
    let checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('id', radioId);
    checkboxInput.setAttribute('type', 'checkbox');
    checkboxInput.setAttribute('name', 'todo');
    checkboxInput.setAttribute('value', todo.description)

    // checkbox label
    let checkboxLabel = document.createElement('label');
    checkboxLabel.classList.add('todo-item__label');
    checkboxLabel.setAttribute('for', radioId);

    // label description
    let description = document.createTextNode(todo.description);

    // put together node elements
    checkboxLabel.appendChild(description);
    container.appendChild(checkboxInput);
    container.appendChild(checkboxLabel);
    document.getElementById('todo-list').appendChild(container);

}

// resets the form and removes objects from the myList array
function resetForm() {
    document.getElementById('todo-list__form').reset();
    myList.clearList();
    removeChildNodes(document.getElementById('todo-list'));

    function removeChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}
