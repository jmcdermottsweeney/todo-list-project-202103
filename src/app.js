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

function formVal(pass) {
    if (pass == "") {
        return true;
    } else return false;
}

// triggered when the input field is submitted
function clickFunc() {
    if (document.getElementById('input__todo-item').value == false) {
        document.getElementById('input__alert-message').innerHTML = 'Write in your todos';
    } else {
        myList.addTodo(new TodoItem(document.getElementById('input__todo-item').value));
        document.getElementById('input__todo-item').value = '';
        myList.seeList();
        console.log("====");
    }
}