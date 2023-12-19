import { projects } from './submitProject.js';
import displayProjects from './displayProjects.js';

function loadProjectsFromLocalStorage() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        const loadedProjects = JSON.parse(storedProjects);
        // Projeleri global projeler dizisine ekleyin
        loadedProjects.forEach(project => projects.push(project));
        // Tüm projeleri göstermek için displayProjects fonksiyonunu çağırın
        displayProjects(projects);
    }
}

export default loadProjectsFromLocalStorage;
