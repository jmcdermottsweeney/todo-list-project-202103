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
    addTodo(newItem) { this.arr.push(newItem); }

    // returns the object at index i
    getTodo(i) { return this.arr[i]; }

    // remove a todo item from the list
    removeTodo(i) { this.arr.splice(i, 1); }

    // remove all objects in arr
    clearList() { this.arr.splice(0); }

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
    }
    userInput.value = '';
});

// validates the given input for a todo item is not a blank string
function checkInput(input) {
    let inputVal = input.value.toString().trim();
    console.log(inputVal);
    if (inputVal !== '' && inputVal !== null) {
        alertMsg.innerHTML = 'Add an item onto your todo list.';
        alertMsg.classList.remove("error__alert-message");
        document.getElementById('todo-list__input').classList.remove('error__input');
        return true;
    } else {
        alertMsg.innerHTML = 'Please input a valid string.';
        alertMsg.classList.add("error__alert-message");
        document.getElementById('todo-list__input').classList.add('error__input');
        return false;
    }
}

// resets the form and removes objects from the myList array
function resetForm() {
    if (myList.arr.length !== 0) {
        let msg = confirm('Do you want to delete all the items on your todo list? This cannot be undone.');
        if (msg === true) {
            document.getElementById('todo-list__form').reset();
            myList.clearList();
            let parent = document.getElementById('todo-list');
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
    } else {
        alert('Your todo list is empty.');
    }
}

// insert HTML into the dom representing the new todo item
function createTodoNode(id, todo, list) {
    document.getElementById(id).innerHTML = '';
    list.arr.forEach(function (todo) {
        let idName = 'todo-item__' + (list.arr.indexOf(todo) + 1);
        let customCheck = idName + '--check';
        document.getElementById(id).insertAdjacentHTML('beforeend',
            `<div class="todo-item__container">
                <div class="todo-item__icon-wrapper">
                    <a id="${customCheck}" class="todo-item__check-icon" href="#"><i class="fas fa-check-circle"></i></a>
                </div>
                <div class="todo-item__input-wrapper">
                    <input id="${idName}}" type="checkbox" name="todo" value="what" />
                    <label class="todo-item__label todo-item__incomplete" for="${idName}">${todo.description}</label>
                    <div class="todo-item__delete-wrapper">
                        <a class="todo-item__delete-link" href="#">Remove this item</a>
                    </div>
                </div>
            </div>`);
        handleTodo(id, list, todo);
    });
}

function handleTodo(id, list, todo) {
    document.getElementById('todo-item__' + (list.arr.indexOf(todo) + 1) + '--check').addEventListener('click', function () {
        todo.switchStatus();
        let todoLabel = document.querySelectorAll('.todo-item__label')[list.arr.indexOf(todo)];
        if (todo.status == true) {
            todoLabel.classList.remove('todo-item__incomplete');
            todoLabel.classList.add('todo-item__complete');
        } else {
            todoLabel.classList.remove('todo-item__complete');
            todoLabel.classList.add('todo-item__incomplete');
        }
        console.log(list.arr.indexOf(todo) + ' ' + todo.status);
    });

    document.querySelectorAll('.todo-item__delete-link')[list.arr.indexOf(todo)].addEventListener('click', function () {
        document.getElementById(id).removeChild(document.querySelectorAll('.todo-item__container')[list.arr.indexOf(todo)]);
        list.removeTodo(list.arr.indexOf(todo));
    });
}