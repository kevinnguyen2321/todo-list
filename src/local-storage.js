import { projectArray, Project, todoArray } from "./project-func";
// import { todoArray } from "./todo-fun";


  // Add and grab projects from local storgage//
export const addProjToLocalStorage = function () {
    localStorage.setItem('projects', JSON.stringify(projectArray))
};


export const getProjectsFromLocalStorage = function () {
    const storedProjects = localStorage.getItem('projects');
   return storedProjects ? JSON.parse(storedProjects): [];
};


 //Add and grab todos from local storage//
export const addTodoToLocalStorage = function () {
   localStorage.setItem('todos', JSON.stringify(todoArray))
};



export const getTodoFromLocalStorage = function () {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : [];
}

