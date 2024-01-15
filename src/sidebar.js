import { createListForm, loadPageLayout } from "./dom";






export const createUserSelectionModal = function () {
    const {content} = loadPageLayout
    const {newProjectDialog} = createNewProjectModal()
    // User selection modal//
   const plusDialog = document.createElement('dialog')
   plusDialog.classList.add('plus-dialog')
   
   const plusDialogContainer = document.createElement('div')
   plusDialogContainer.classList.add('plus-dialog-container')
   plusDialog.appendChild(plusDialogContainer)

   // X close button//
   const closeUserSelectionBtn = document.createElement('button')
   closeUserSelectionBtn.textContent = 'X'
   closeUserSelectionBtn.classList.add('view-modal-close')
   plusDialogContainer.appendChild(closeUserSelectionBtn)
    //Close button event listener//
   closeUserSelectionBtn.addEventListener('click', (e)=> {
    plusDialog.close()
    });


//Add new todo List Button//
 const addNewTodoListBtn = document.createElement('button')
 addNewTodoListBtn.textContent = 'New Todo';
 addNewTodoListBtn.classList.add('add-new-todo-btn');
 plusDialogContainer.appendChild(addNewTodoListBtn)

 // New todolist btn event listener//
 addNewTodoListBtn.addEventListener('click', (e)=> {
        const {listModal} = createListForm
        listModal.showModal()
        plusDialog.close()
    });

 // Add new project btn// 
const addNewProjectBtn = document.createElement('button');
addNewProjectBtn.textContent = 'New Project';
addNewProjectBtn.classList.add('add-new-project-btn')
plusDialogContainer.appendChild(addNewProjectBtn);

//Add new project event listner// 

    addNewProjectBtn.addEventListener('click', (e)=> {
        content.appendChild(newProjectDialog)
        newProjectDialog.showModal()
    });





   return {plusDialog}
}

//Function to create new project modal//
export const createNewProjectModal = function () {
    // New project dialog//
    const newProjectDialog = document.createElement('dialog');
    newProjectDialog.classList.add('new-project-dialog')
    const newProjectForm = document.createElement('form')
    newProjectForm.classList.add('new-project-form')
    newProjectDialog.appendChild(newProjectForm)

    //Close button//
    const closeProjectModalBtn = document.createElement('button')
    closeProjectModalBtn.textContent = 'X';
    closeProjectModalBtn.classList.add('project-modal-close')
    newProjectForm.appendChild(closeProjectModalBtn)
    // Close button event listener//
    closeProjectModalBtn.addEventListener('click', (e)=> {
        e.preventDefault()
        newProjectDialog.close()

    });

    // Project name//
    const nameContainer = document.createElement('div')
    newProjectForm.appendChild(nameContainer)
    const projectName = document.createElement('label')
    projectName.setAttribute('for', 'name')
    projectName.textContent = 'Project Name'

    const projectNameInput = document.createElement('input')
    projectNameInput.setAttribute('type', 'text')

    nameContainer.appendChild(projectName)
    nameContainer.appendChild(projectNameInput)

 

    //Create project button// 
    const createNewProjectBtn = document.createElement('button');
    createNewProjectBtn.textContent = 'Add Project'
    newProjectForm.appendChild(createNewProjectBtn)

    

  return {newProjectDialog}
}





