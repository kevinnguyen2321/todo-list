// import {format} from "date-fns";
import { listArray,TodoList, addListToArr,formatDate } from "./create-list"
import { deleteListItem,updateIndex } from "./delete-list";
import { editListForm,createEditForm } from "./edit";


// Initial page load//
export const loadPageLayout = (function() {
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
    //Content section//
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

// Function to handle priority buttons//
export const handlePriorityBtns = function (oppositeBtn, button) {
    if (oppositeBtn.classList.contains('selected')) {
        oppositeBtn.classList.remove('selected')
        oppositeBtn.style.backgroundColor = '';
        button.classList.add('selected')
        button.style.backgroundColor = 'green';
       priorityValue = 'low'
        
    } else {
        button.classList.add('selected')
        button.style.backgroundColor = 'green'
        priorityValue = 'low'
    }
}


// Function to create form for list creation and adding to DOM//
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
    const {addButton} = loadPageLayout

    // Add button event listener//
    addButton.addEventListener('click', (e) => {
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
        //Call function to formate date//
        const formattedDate = formatDate(dueDateInput.value)

    // Creating new TodoList instance//

         const list = new TodoList (titleInput.value, descriptionInput.value, 
        itemsInput.value,formattedDate, priorityValue)
            //Add list to list array//
          addListToArr(list)
        
         //Function to display list card on page//
        createListCard(list)
        console.log('Initial List with no edits:', list)

        listModal.close()
        
    }); 
    
   return {listModal}
   
})();

// Function to display Todo list cards on page//

export const createListCard = function (list) {
    
const listCard = document.createElement('div');
listCard.classList.add('list-card');
content.appendChild(listCard);
// Left side containder for List card//
const leftSideContainer = document.createElement('div');
leftSideContainer.classList.add('left-side-container')
//List card title//
const contentTitle = document.createElement('h1');
contentTitle.textContent = list.title;
contentTitle.classList.add('list-title');
leftSideContainer.appendChild(contentTitle);
listCard.appendChild(leftSideContainer)

// Right side container on List card//
const rightSideContainer = document.createElement('div');
rightSideContainer.classList.add('right-side-container')
// Due date display//
const dueDateDisplay = document.createElement('p');
dueDateDisplay.textContent = list.dueDate;
dueDateDisplay.classList.add('list-details');
rightSideContainer.appendChild(dueDateDisplay)
listCard.appendChild(rightSideContainer);


//Edit button// 
const editBtn = document.createElement('button');
editBtn.classList.add('edit-btn')
editBtn.textContent = 'Edit'
rightSideContainer.appendChild(editBtn);

//Event listener for edit button//
editBtn.addEventListener('click', (e)=> {
    e.preventDefault ();
    const {editDialog} = createEditForm(list, contentTitle,dueDateDisplay)
    document.body.appendChild(editDialog)
    editDialog.showModal()
    
    
});

// Delete button//
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.classList.add('delete-btn');
const listIndex = listArray.length -1;
deleteBtn.setAttribute('data-index', listIndex)
rightSideContainer.appendChild(deleteBtn);

//Event listener for delete button// 
  deleteBtn.addEventListener('click', ()=> {
    deleteListItem(deleteBtn)
    updateIndex()
  });

  
}


