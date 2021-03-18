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
        createTodoNode('todo-list', newTodo, myList);
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

function createTodoNode(id, todo, list) {
    document.getElementById(id).insertAdjacentHTML('afterbegin',
    `<div class="todo-item__container">
        <div class="todo-item__icon-wrapper">
            <span class="todo-item__check-icon far fa-check-square"></span>
        </div>
        <div class="todo-item__input-wrapper">
            <input id="todo-item__${(list.arr.indexOf(todo) + 1)}" type="checkbox" name="todo" value="what" />
            <label class="todo-item__label" for="todo-item__0" style="text-decoration: none">${todo.description}</label>
            <div class="todo-item__delete-wrapper">
                <a class="todo-item__delete-link" href="#">Remove this item</a>
            </div>
        </div>
    </div>)`);

    document.getElementByClass
}