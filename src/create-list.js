import { pageLoad } from "./dom"
const {addButton} = pageLoad
import {format} from "date-fns";
import { DisplayLists } from "./dom";






 
// Function to add new list via buttons//
export const addNewList = (function () {
    //Modal for list creation//
    const listModal = document.querySelector('dialog');
    const closeBtn = document.querySelector('.close-btn');
    const submitBtn = document.querySelector('.submit-btn');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const itemsInput = document.getElementById('items');
    const dueDateInput = document.getElementById('due-date');
    const lowPriorityBtn = document.getElementById('low');
    const highPriorityBtn = document.getElementById('high')
    
    // Add button event listener//
    addButton.addEventListener('click', (e) => {
       
        listModal.showModal()
    });

   
    //Close button event listener//
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault ();
        listModal.close();
        
    });  
    
    
        //Submit button event listener//
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

     
        // Converting date into correct format//
        const dateString = dueDateInput.value;
        const dateNoHyphen = new Date (dateString.replace(/-/g, '/'))
        

        const formattedDate = format(dateNoHyphen, 'MM/dd/yyyy')

        // Priority button selection//

        

        
        

        // creating new TodoList instance//

         const list = new TodoList (titleInput.value, descriptionInput.value, 
        itemsInput.value,formattedDate)

        console.log(list)
        

        DisplayLists(list)

        

        
            // Clear values after submit button is clicked//
        titleInput.value = ''
        descriptionInput.value = ''
        itemsInput.value = ''
        dueDateInput.value = ''

        listModal.close()

        
    }); 
    
   
})();


  


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

