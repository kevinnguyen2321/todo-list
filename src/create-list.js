import { pageLoad } from "./dom"
const {addButton} = pageLoad

const listModal = document.querySelector('dialog');
const closeBtn = document.querySelector('.close-btn');


 
// Function to add new list//
export const addNewList = (function () {
    //Modal for list creation//
   

        
  


    addButton.addEventListener('click', (e) => {
       
        listModal.showModal()
    });

   
   
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault ();
        listModal.close();
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
        return this.description
    }
}

