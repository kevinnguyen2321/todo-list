import { listArray } from "./create-list";
import { loadPageLayout, createListForm, createListCard } from "./dom"
import { projectArray, Project } from "./project-func";
import { createNewProjectModal, project } from "./sidebar";
import { getCurrentProject } from "./projectManager";








 // Function to handle content based on project//
export const createContent = function (value) {
 
   const {projectHeader,content} = loadPageLayout
  
   projectHeader.textContent = value

   
   //Get project based on project name//
   const project = getProjectByName(value)
   //Clear current content//
   content.innerHTML = ''
   // Append project's content on content div
   content.appendChild(project.content)
   console.log(project.name)
   console.log(project.content)

   
   

   
};

// Function to retrieve project by name//
const getProjectByName = (name) => {
   return projectArray.find((project) => project.name === name);
}

      

   




