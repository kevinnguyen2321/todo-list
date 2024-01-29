import { projectArray} from "./project-func";
import { setCurrentProject } from "./projectManager";
import { loadPageLayout } from "./dom";
import { addProjToLocalStorage } from "./local-storage";
//Function to delete project cards//
export const deleteProjectCard = function (projectDeleteBtn) {
    const projCards = document.querySelectorAll('.side-bar-project-cards');
    const projectIndex = parseInt(projectDeleteBtn.getAttribute('index'))
    
    let projCardToDelete = projCards[projectIndex]
    
    projCardToDelete.remove();
    projectArray.splice(projectIndex, 1)

    setCurrentProject(null)

    const {projectHeader, content} = loadPageLayout
    projectHeader.textContent = ''
    content.innerHTML = ''
    addProjToLocalStorage();
};
    


    
//Function to update project indexes//
export const updateProjectIndex = function () {
    const projDeleteBtns = document.querySelectorAll('.side-bar-project-delete');
    projDeleteBtns.forEach((button, index) => {
        button.setAttribute('index', index)
    });

}
