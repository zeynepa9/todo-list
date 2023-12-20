import displayProjects from './displayProjects.js';
import { projects } from './submitProject.js';



function displayProjectsOnProjects() {
    
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    displayProjects(projects); 
}


    export default displayProjectsOnProjects;