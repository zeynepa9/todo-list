import { projects } from './submitProject.js';

function saveProjectsToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export default saveProjectsToLocalStorage;