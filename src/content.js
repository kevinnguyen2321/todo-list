import { listArray } from "./create-list";
import { loadPageLayout, createListForm, createListCard } from "./dom"
import { projectArray, Project } from "./project-func";
import { createNewProjectModal, project } from "./sidebar";
import { getCurrentProject, setCurrentProject } from "./projectManager";
import { add } from "date-fns";








 // Function to handle content based on project//
export const createProjContent = function (value) {
 
   const {projectHeader,content} = loadPageLayout
   projectHeader.textContent = value

 // //Get project based on project name//
     const project = getProjectByName(value)
     setCurrentProject(project)
     //Clear current content//
     content.innerHTML = ''
     // Append project's content on content div//
     content.appendChild(project.content)
     toggleAddBtn()

};

// Function to retrieve project by name//
const getProjectByName = (name) => {
   return projectArray.find((project) => project.name === name);
}

      

// Function to create content for non Project Todo Lists//
export const createToDoContent = function (value) {
   const {projectHeader, content} = loadPageLayout
   projectHeader.textContent = 'Todo'
   setCurrentProject(value)
   content.innerHTML = ''
   content.appendChild(value.content)
   toggleAddBtn()
}


export const toggleAddBtn = function () {
   const {projectHeader, addButton} = loadPageLayout
   if (projectHeader.textContent.trim() !== '') {
      addButton.classList.remove('hidden')
      addButton.classList.add('add-btn')
   } else {
      addButton.classList.remove('add-btn')
      addButton.classList.add('hidden')
      
   }
}

