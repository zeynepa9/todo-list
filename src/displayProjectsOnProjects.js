import displayProjects from './displayProjects.js';
import { projects } from './submitProject.js';



function displayProjectsOnProjects() {
    // Mevcut todo ve proje listesini temizleyin
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    // displayProjects fonksiyonunu çağırarak tüm projeleri göster
    displayProjects(projects); 
}


    export default displayProjectsOnProjects;