
import { addTodoToLocalStorage, getTodoFromLocalStorage } from "./local-storage"
import { todoArray, Project } from "./project-func"
import { setCurrentProject } from "./projectManager"
import { createToDoContent } from "./content"


//Array for todos//
// export const todoArray = []

//Pushing project instances into project array//
export const addTodoToArr = function (todo) {
    todoArray.push(todo)
    addTodoToLocalStorage(); //trial//
}


// export const checkForMultipleTodoObjs = function () {
//     const existingTodoProject = todoArray.find(todo => todo.name === 'todo');

//     if (existingTodoProject) {
//         // If "todo" project exists, update it
//         setCurrentProject(existingTodoProject);
//         createToDoContent(existingTodoProject);
//     } else {
//         // If "todo" project doesn't exist, create a new instance
//         const todo = new Project('todo');
//         setCurrentProject(todo);
//         createToDoContent(todo);
//         todoArray.push(todo);
//         addTodoToLocalStorage()
//     }

// }

export const removeTodoFromArr = function (index) {
    todoArray.splice(index, 1);
    addTodoToLocalStorage(); // Save changes to local storage
}; // trial//

