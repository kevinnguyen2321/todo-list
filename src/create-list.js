import {format} from "date-fns";



//Class for new list//
export class TodoList {
    constructor (title, description, items, dueDate, priority){
        this.title = title
        this.description = description
        this.items = items
        this.dueDate = dueDate
        this.priority = priority
        this.checked = false
    }

    set listTitle (x) {
        this.title = `${x}`
    }
    set listDescription (x) {
        this.description = `${x}`
    }
    set listItem (x) {
        this.items = `${x}`
    }
    set listdueDate (x) {
        this.dueDate = `${x}`
    }
    set listPriority (x) {
        this.priority = `${x}`
    }

    set listChecked (x) {
        this.checked = `${x}`
    }

}



// Function for formatting date//
export const formatDate = function(date) {
    const dateString = date
    const dateNoHyphen = new Date (dateString.replace(/-/g, '/'))
    const formattedDate = format(dateNoHyphen, 'MM/dd/yyyy')
    return formattedDate
}

// Function to handle priority buttons//
export const handlePriorityBtns = function (oppositeBtn, button) {
    if (oppositeBtn.classList.contains('selected')) {
        oppositeBtn.classList.remove('selected')
        oppositeBtn.style.backgroundColor = '';
        button.classList.add('selected')
        
        if (button.textContent === 'Low') {
            button.style.backgroundColor = 'green'
            
        } else {
            button.style.backgroundColor = 'red'
            
        }
    } else {
        button.classList.add('selected')
        if (button.textContent === 'Low') {
            button.style.backgroundColor = 'green'
            
            
        } else {
            button.style.backgroundColor = 'red'
            
        }
    }
}






