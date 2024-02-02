import{loadPageLayout} from "./dom.js"
import { getProjectsFromLocalStorage } from "./local-storage.js";
import { getTodoFromLocalStorage } from "./local-storage.js";


//Array for todos//

export const todoArray = getTodoFromLocalStorage()
// export const todoArray = []




//Array for projects//
export const projectArray = getProjectsFromLocalStorage()



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
    // const{content} = loadPageLayout
   
}



