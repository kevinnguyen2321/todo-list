import{loadPageLayout} from "./dom.js"
import { getProjectsFromLocalStorage } from "./local-storage.js";



export const projectArray = getProjectsFromLocalStorage()
// export const projectArray = [];


export class Project  {
     constructor(name) {
      this.name = name
      this.listArray = [];
      this.content = document.createElement('div')
     }

     set projContent (x) {
        this.content = `${x}`
     }
};
     


  //Pushing project instances into project array//
export const addProjectToArr = function (project) {
    projectArray.push(project)
    const{content} = loadPageLayout
   
}



