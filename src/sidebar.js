import { createListCard, createListForm, loadPageLayout } from "./dom";
import { createProjContent, createToDoContent,toggleAddBtn } from "./content";
import { addProjectToArr, Project, projectArray, todoArray } from "./project-func";
import { setCurrentProject,getCurrentProject } from "./projectManager";
import { deleteProjectCard, updateProjectIndex } from "./delete-project";
import { addProjToLocalStorage,getProjectsFromLocalStorage, addTodoToLocalStorage} from "./local-storage";
import { checkForMultipleTodoObjs} from "./todo-fun";
import { updateTodoIndex } from "./delete-list";


 //Function to create user selection modal//
export const createUserSelectionModal = function () {
    // const {content} = loadPageLayout
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
        
    const existingTodoProject = todoArray.find
    (todo => todo.name === 'todo');

    if (existingTodoProject) {
        // If "todo" project exists, update it
        setCurrentProject(existingTodoProject);
        createToDoContent(existingTodoProject);
        
        
        const {sideBarTodoHeader} = loadPageLayout
     sideBarTodoHeader.addEventListener('click', (e)=> {
         createToDoContent(existingTodoProject)
         
         
     });
    } else {
        // If "todo" project doesn't exist, create a new instance
        const todo = new Project('todo');
        setCurrentProject(todo);
        createToDoContent(todo);
        todoArray.push(todo);
       
        // Todolist header on side bar event listener//
     const {sideBarTodoHeader} = loadPageLayout
     sideBarTodoHeader.addEventListener('click', (e)=> {
         createToDoContent(todo)
         
         
     });
    }
   
    plusDialog.close()

    });

     

   

 // Add new project btn// 
const addNewProjectBtn = document.createElement('button');
addNewProjectBtn.textContent = 'New Project';
addNewProjectBtn.classList.add('add-new-project-btn')
plusDialogContainer.appendChild(addNewProjectBtn);

//Add new project event listner// 

    addNewProjectBtn.addEventListener('click', (e)=> {
        const {projectHeader, contentContainer} = loadPageLayout
        contentContainer.appendChild(newProjectDialog)
        newProjectDialog.showModal()
        projectHeader.textContent = ''
        content.innerHTML = ''

        plusDialog.close()
    });


    return {plusDialog}
}

//Function to create new project modal//
export const createNewProjectModal = function () {
    const {contentContainer} = loadPageLayout
   
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
    nameContainer.classList.add('project-name-container')
    
    const projectName = document.createElement('label')
    projectName.setAttribute('for', 'name')
    projectName.textContent = 'Project Name'
    nameContainer.appendChild(projectName)

    const projectNameInput = document.createElement('input')
    projectNameInput.setAttribute('type', 'text')

    
    nameContainer.appendChild(projectNameInput)

    //Create project button// 
    const newProjBtnContainer = document.createElement('div')
    newProjBtnContainer.classList.add('new-proj-btn-container')
    const createNewProjectBtn = document.createElement('button');
    createNewProjectBtn.textContent = 'Create Project'
    newProjBtnContainer.appendChild(createNewProjectBtn)

    newProjectForm.appendChild(nameContainer)
    newProjectForm.appendChild(newProjBtnContainer)
    
   
    
    //Create project event listener// 
    createNewProjectBtn.addEventListener('click', (e)=> {
        e.preventDefault();

        if (projectNameInput.value === '') {
            alert('Project name required')
        } else {
            const projectName = projectNameInput.value
            const project = new Project (projectName)
            createProjectNameCard(projectName)
            addProjectToArr(project);
            setCurrentProject(project);
            addProjToLocalStorage();
            newProjectDialog.close()
        }
    });



    

  return {newProjectDialog, projectNameInput}
}

 // Function to create project card on sidebar//
export const createProjectNameCard = function (value) {
    const {sideBar, projectHeaderContainer, contentContainer, content} = loadPageLayout
    const {projectNameInput} = createNewProjectModal()
    const  {project} = createNewProjectModal()
    //Creation of new project cards on sidebar//
    const projectNameCard = document.createElement('div')
    projectNameCard.classList.add('side-bar-project-cards')
    projectNameCard.textContent = value
    projectHeaderContainer.appendChild(projectNameCard)

    //Project delete button//
    const projectDeleteBtn = document.createElement('button')
    projectDeleteBtn.classList.add('side-bar-project-delete')
    projectDeleteBtn.textContent = 'X'
    const projIndex = projectArray.length;
    projectDeleteBtn.setAttribute('index', projIndex)
    projectNameCard.appendChild(projectDeleteBtn)
     
    //Event listener for project name sidebar//
    projectNameCard.addEventListener('click', (e)=> {
        if (!e.target.classList.contains('side-bar-project-delete')) {
            createProjContent(value);
        }
    });
     
    //Event listener for project delete button//
    projectDeleteBtn.addEventListener('click', (e) => {
        // Prevent the click event from propagating to the parent div
        e.stopPropagation();
        const userConfirmed = confirm("Are you sure you want to delete this project? ")
        if (userConfirmed) {
            deleteProjectCard(projectDeleteBtn);
            updateProjectIndex();
            toggleAddBtn()

        }
    });   

   
    

    return {projectNameCard}
}





