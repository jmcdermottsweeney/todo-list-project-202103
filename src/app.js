class TodoItem {
    constructor(description, status) {
        this.description = description;
        this.status = status;
    }

    getDescription() {
        let str = this.description.status;
        if (typeof str !== String) {
            return alert("Error: Description is not a string");
        }
    }

    getStatus() {
        let bol = this.arr.status;
        if (typeof bol !== Boolean) {
            return alert("Error: Status is not a boolean");
        }
    }
}

class TodoList {
    constructor() {
        this.arr = [];
    }

    addItem(newItem) {
        this.arr.push(newItem);
    }

    removeItem(newItem, i) {
        this.arr.splice(i, 1);
    }

    seeMyList() {
        for (let i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i]);
        }
    }
}


let item1 = new TodoItem('Lorem', "Ipsum");
let item2 = new TodoItem('Hello', "World");
let item3 = new TodoItem('Be', "Kind");


let myList = new TodoList();
myList.addItem(item1);
myList.addItem(item2);
myList.addItem(item3);

myList.seeMyList();



