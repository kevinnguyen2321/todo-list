import {format} from "date-fns";
import { listArray,TodoList, addListToArr } from "./create-list"




// Initial page load//
export const pageLoad = (function() {
    const mainContainer = document.createElement('div')
    mainContainer.classList.add('main-container')
    document.querySelector('body').appendChild(mainContainer)
    //Header//
    const header = document.createElement('div')
    header.classList.add('header')
    const headerText = document.createElement('h1')
    headerText.textContent = 'My Todo List'
    header.appendChild(headerText)
    mainContainer.appendChild(header)

    const content = document.getElementById('content');
    mainContainer.appendChild(content)
    

     //Side bar//
    const sideBar = document.createElement('div')
    sideBar.classList.add('side-bar')
    const sideBarText = document.createElement('p')
    sideBarText.textContent = 'My Projects'

    const addButton = document.createElement('button');
    addButton.textContent = 'Add'
    addButton.classList.add('add-btn')
    sideBar.appendChild(addButton)
    sideBar.appendChild(sideBarText)
    mainContainer.appendChild(sideBar)

   
    
    return {content,addButton}

})()


// Function to add new list via buttons to DOM//
export const createListForm = (function () {
    //Modal for list creation//
    const listModal = document.querySelector('dialog');
    const closeBtn = document.querySelector('.close-btn');
    const submitBtn = document.querySelector('.submit-btn');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const itemsInput = document.getElementById('items');
    const dueDateInput = document.getElementById('due-date');
    const lowPriorityBtn = document.getElementById('low');
    const highPriorityBtn = document.getElementById('high');
    let priorityValue;
    const {addButton} = pageLoad

    
    // Add button event listener//
    addButton.addEventListener('click', (e) => {
        listModal.showModal()
    });

   
    //Close button event listener//
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault ();
        listModal.close();
        
    });
    
    
    //Priority button selection//

    lowPriorityBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        if (highPriorityBtn.classList.contains('selected')) {
            highPriorityBtn.classList.remove('selected')
            highPriorityBtn.style.backgroundColor = '';
            lowPriorityBtn.classList.add('selected')
            lowPriorityBtn.style.backgroundColor = 'green';
           priorityValue = 'low'
            
        } else {
            lowPriorityBtn.classList.add('selected')
            lowPriorityBtn.style.backgroundColor = 'green'
            priorityValue = 'low'
        }

       
    });

    highPriorityBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        if (lowPriorityBtn.classList.contains('selected')) {
            lowPriorityBtn.classList.remove('selected');
            lowPriorityBtn.style.backgroundColor = '';
            highPriorityBtn.classList.add('selected')
            highPriorityBtn.style.backgroundColor = 'red';
            priorityValue = 'high'
            
        } else {
            highPriorityBtn.classList.add('selected')
            highPriorityBtn.style.backgroundColor = 'red'
            priorityValue = 'high'
        }
        
    })
    
    //Submit button event listener//
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
    // Converting date into correct format//
        const dateString = dueDateInput.value;
        const dateNoHyphen = new Date (dateString.replace(/-/g, '/'))
        const formattedDate = format(dateNoHyphen, 'MM/dd/yyyy')

    // Creating new TodoList instance//

         const list = new TodoList (titleInput.value, descriptionInput.value, 
        itemsInput.value,formattedDate, priorityValue)
            //Add list to list array//
          addListToArr(list)
        
         //Function to display list card on page//
        createListCard(list)

        
        // Clear values after submit button is clicked//
        titleInput.value = ''
        descriptionInput.value = ''
        itemsInput.value = ''
        dueDateInput.value = ''
        priorityValue = ''
        highPriorityBtn.classList.remove('selected')
        highPriorityBtn.style.backgroundColor = ''
        lowPriorityBtn.classList.remove('selected')
        lowPriorityBtn.style.backgroundColor = ''

        listModal.close()
    }); 
    
   
})();


// Function to display To Do lists on page//

export const createListCard = function (list) {
    
const listCard = document.createElement('div');
listCard.classList.add('list-card');
content.appendChild(listCard);

const leftSideContainer = document.createElement('div');
const contentTitle = document.createElement('h1');
contentTitle.textContent = list.title;
contentTitle.classList.add('list-title');
leftSideContainer.appendChild(contentTitle);
listCard.appendChild(leftSideContainer);

// Right side container on List card//
const rightSideContainer = document.createElement('div');
rightSideContainer.classList.add('right-side-container')
// Due date display//
const dueDateDisplay = document.createElement('p');
dueDateDisplay.textContent = list.dueDate;
dueDateDisplay.classList.add('list-details');
rightSideContainer.appendChild(dueDateDisplay)
listCard.appendChild(rightSideContainer);

// Delete button//
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.classList.add('delete-btn')
rightSideContainer.appendChild(deleteBtn)

}


