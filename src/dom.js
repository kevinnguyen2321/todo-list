// import {format} from "date-fns";
import { listArray,TodoList, addListToArr,formatDate,handlePriorityBtns } from "./create-list"
import { deleteListItem,updateIndex, deleteTodoListItems, updateTodoIndex } from "./delete-list";
import {createEditForm } from "./edit";
import { viewListDetails } from "./view";
import { createUserSelectionModal, createNewProjectModal, createProjectNameCard} from "./sidebar";
import { getCurrentProject, setCurrentProject } from "./projectManager";
import { getProjectsFromLocalStorage, addProjToLocalStorage, addTodoToLocalStorage, getTodoFromLocalStorage } from "./local-storage";
import { projectArray,todoArray } from "./project-func";
import { createProjContent } from "./content";
import { updateProjectIndex } from "./delete-project";
import { removeTodoFromArr } from "./todo-fun";
import { add } from "date-fns";



// Event listener to add any projects from local storage onto DOM//
document.addEventListener('DOMContentLoaded', ()=> {
      
    projectArray.forEach(project => {
        createProjectNameCard(project.name)
        project.content = document.createElement('div')
        updateProjectIndex()
        

        project.listArray.forEach(list => {
            setCurrentProject(project)
            createListCard(list)
            
        });
    });
   
   
  
   todoArray.forEach(item => {
        
        item.content = document.createElement('div')
        
        item.listArray.forEach((list,index) => {
            setCurrentProject(item)
            const {projectHeader} = loadPageLayout
            projectHeader.textContent = 'Todo'
            createListCard(list)
        });
    });

    
});






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
    contentContainer, content, projectHeader,
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
        const dueDateValue = dueDateInput.value
        
        
            if (titleInput.value == '' || itemsInput.value == ''
            || !dueDateValue || priorityValue == '') {
                alert('Please fill out fields')
                
            } else {
                   //Call function to formate date//
                const formattedDate = formatDate(dueDateValue)

                // Creating new TodoList instance//
                const list = new TodoList (titleInput.value, descriptionInput.value, 
                itemsInput.value,formattedDate, priorityValue)
        //Add list to list array property//
      
          getCurrentProject().listArray.push(list)
      
      //Function to display list card on page//
      createListCard(list)
    listModal.close()
    

        }
        
             
    }); 
    
   return {listModal, titleInput, descriptionInput, itemsInput,
    dueDateInput, priorityValue, highPriorityBtn,lowPriorityBtn
}
   
})();

// Function to display Todo list cards on page//

export const createListCard = function (list, index) {
   
    
const listCard = document.createElement('div');
listCard.classList.add('list-card');
// content.appendChild(listCard);
const project = getCurrentProject()

if (project.name === 'todo') {
    project.content.appendChild(listCard)
    addTodoToLocalStorage()
  
} else {
    project.content.appendChild(listCard)
    addProjToLocalStorage();
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

const {projectHeader} = loadPageLayout
if (projectHeader.textContent ==='Todo') {
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'
    removeBtn.classList.add('remove-btn')

    const todoListIndex = getCurrentProject().listArray.length -1;
removeBtn.setAttribute('data-index', todoListIndex)
// removeBtn.setAttribute('data-index', index); //trial//

    rightSideContainer.appendChild(removeBtn)

    removeBtn.addEventListener('click', (e)=> {
        // deleteTodoListItems(removeBtn)
        // addTodoToLocalStorage()
       // updateTodoIndex()
       removeTodoFromArr(index)
       listCard.remove()
    });

    


} else {
    // Delete button//
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.classList.add('delete-btn');


const projectIndex = projectArray.indexOf(project);
const listIndex = project.listArray.indexOf(list);

deleteBtn.setAttribute('data-project-index', projectIndex);
deleteBtn.setAttribute('data-list-index', listIndex);





// const listIndex = getCurrentProject().listArray.length -1;
// deleteBtn.setAttribute('data-index', listIndex)

rightSideContainer.appendChild(deleteBtn);

//Event listener for delete button// 
deleteBtn.addEventListener('click', ()=> {
    deleteListItem(deleteBtn)
    addProjToLocalStorage();
    updateIndex(listIndex, projectIndex)
    console.log(projectArray)
 });

}

// // Delete button//
// const deleteBtn = document.createElement('button');
// deleteBtn.textContent = 'Delete';
// deleteBtn.classList.add('delete-btn');


// const projectIndex = projectArray.indexOf(project);
// const listIndex = project.listArray.indexOf(list);

// deleteBtn.setAttribute('data-project-index', projectIndex);
// deleteBtn.setAttribute('data-list-index', listIndex);





// // const listIndex = getCurrentProject().listArray.length -1;
// // deleteBtn.setAttribute('data-index', listIndex)

// rightSideContainer.appendChild(deleteBtn);


// //Event listener for delete button// 
//   deleteBtn.addEventListener('click', ()=> {
//     deleteListItem(deleteBtn)
//     addProjToLocalStorage();
//     updateIndex(listIndex, projectIndex)
//     console.log(projectArray)
//  });

 
};


