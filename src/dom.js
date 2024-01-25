// import {format} from "date-fns";
import { listArray,TodoList, addListToArr,formatDate,handlePriorityBtns } from "./create-list"
import { deleteListItem,updateIndex } from "./delete-list";
import {createEditForm } from "./edit";
import { viewListDetails } from "./view";
import { createUserSelectionModal, createNewProjectModal} from "./sidebar";
import { getCurrentProject } from "./projectManager";

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

    //Content container//
    const contentContainer = document.createElement('div')
    contentContainer.classList.add('content-container')
    mainContainer.appendChild(contentContainer)

    // Add button div//
    const addBtnContainer = document.createElement('div')
    addBtnContainer.classList.add('add-btn-container')
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Task'
    addButton.classList.add('add-btn')
    addBtnContainer.appendChild(addButton)

    //Header for project/todolist//
    const projectHeader = document.createElement('h1')
    addBtnContainer.insertBefore(projectHeader, addButton);
    projectHeader.classList.add('project-header-text')

    
    contentContainer.appendChild(addBtnContainer)

    // // Content DOM//
    const content = document.getElementById('content');
    contentContainer.appendChild(content)

    //Side bar//
    const sideBar = document.createElement('div')
    sideBar.classList.add('side-bar');
    mainContainer.appendChild(sideBar)

    //Container for plus button & Todo header//
    const sideBarTopContainer = document.createElement('div');
    sideBarTopContainer.classList.add('side-bar-top-container')
    sideBar.appendChild(sideBarTopContainer)

    //Plus button//
    const plusBtn = document.createElement('button')
    plusBtn.classList.add('plus-btn')
    plusBtn.textContent = '+'
    sideBarTopContainer.appendChild(plusBtn)

    // Plus button event listener//
    plusBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        const {plusDialog} = createUserSelectionModal()
        // content.appendChild(plusDialog)
        addBtnContainer.appendChild(plusDialog)
        plusDialog.showModal()
    });

    //Side bar todo lists//
    const sideBarTodoHeader = document.createElement('h3')
    sideBarTodoHeader.textContent = 'Todo Lists'
    sideBarTopContainer.appendChild(sideBarTodoHeader)

   //Side bar project header//
    
    //Sidebar project text container// 
    const projectHeaderContainer = document.createElement('div')
    projectHeaderContainer.classList.add('side-bar-project-container')

    const sideBarProjectHeader = document.createElement('h3')
    sideBarProjectHeader.textContent = 'Projects'

    projectHeaderContainer.appendChild(sideBarProjectHeader)
    sideBar.appendChild(projectHeaderContainer)


    return {content,sideBar, plusBtn, 
    projectHeaderContainer,
    contentContainer, projectHeader,
     mainContainer, addButton, sideBarTodoHeader}

})()

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
        handlePriorityBtns(highPriorityBtn, lowPriorityBtn)
        priorityValue = 'Low'
    });

    highPriorityBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        handlePriorityBtns(lowPriorityBtn,highPriorityBtn)
        priorityValue = 'High'
    });
    
    //Submit button event listener//
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //Call function to formate date//
        const formattedDate = formatDate(dueDateInput.value)

    // Creating new TodoList instance//
    const list = new TodoList (titleInput.value, descriptionInput.value, 
        itemsInput.value,formattedDate, priorityValue)
            //Add list to list array//
        
            //   addListToArr(list)

            getCurrentProject().listArray.push(list)
        
         //Function to display list card on page//
        createListCard(list)
        
        
        

        listModal.close()
    }); 
    
   return {listModal}
   
})();

// Function to display Todo list cards on page//

export const createListCard = function (list) {
   
    
const listCard = document.createElement('div');
listCard.classList.add('list-card');
// content.appendChild(listCard);
const project = getCurrentProject()

if (project) {
    project.content.appendChild(listCard)
    
}

// Left side containder for List card//
const leftSideContainer = document.createElement('div');
leftSideContainer.classList.add('left-side-container')
//List card title//
const contentTitle = document.createElement('h1');
contentTitle.textContent = list.title;
contentTitle.classList.add('list-title');
leftSideContainer.appendChild(contentTitle);
listCard.appendChild(leftSideContainer);

//Checkbox// 
const checkBox = document.createElement('input')
checkBox.type = 'checkbox'
checkBox.id = 'completed'

const labelForCheckBox = document.createElement('label');
labelForCheckBox.htmlFor = 'completed'


leftSideContainer.appendChild(checkBox)
leftSideContainer.appendChild(labelForCheckBox)

checkBox.addEventListener('change', ()=>{
    listCard.classList.toggle('completed', checkBox.checked);
});


//View button//
const viewBtn = document.createElement('button')
viewBtn.textContent = 'View'
leftSideContainer.appendChild(viewBtn);

viewBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const {viewDialog} = viewListDetails(list)
    content.appendChild(viewDialog)
    viewDialog.showModal()
    
});

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
const listIndex = getCurrentProject().listArray.length -1;
deleteBtn.setAttribute('data-index', listIndex)
rightSideContainer.appendChild(deleteBtn);

//Event listener for delete button// 
  deleteBtn.addEventListener('click', ()=> {
    deleteListItem(deleteBtn)
    updateIndex()
  });

};


