import { createProjectNameCard } from "./sidebar";
import{contentContainer, loadPageLayout} from "./dom.js"



export const projectArray = [];


export class Project  {
     constructor(name) {
      this.name = name
      this.listArray = [];
      this.content = document.createElement('div')
     }
  
}



export const addProjectToArr = function (project) {
    projectArray.push(project)
    const{content} = loadPageLayout
   console.log(projectArray)
}

