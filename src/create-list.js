
// List array//
export const listArray = [];


//Class for new list//
export class TodoList {
    constructor (title, description, items, dueDate, priority){
        this.title = title
        this.description = description
        this.items = items
        this.dueDate = dueDate
        this.priority = priority
    }

    get listTitle () {
        return this.title
    }
}

// Function to add list to array//
export const addListToArr = function(list) {
    listArray.push(list)
}







