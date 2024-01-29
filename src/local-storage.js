import { projectArray, Project } from "./project-func";



export const addProjToLocalStorage = function () {
    localStorage.setItem('projects', JSON.stringify(projectArray))
};


export const getProjectsFromLocalStorage = function () {
    const storedProjects = localStorage.getItem('projects');
   return storedProjects ? JSON.parse(storedProjects): [];
};


