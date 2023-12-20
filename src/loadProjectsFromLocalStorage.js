import { projects, Project } from './submitProject.js';
import displayProjects from './displayProjects.js';

function loadProjectsFromLocalStorage() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        const loadedProjects = JSON.parse(storedProjects);
        loadedProjects.forEach(project => {
            projects.push(project);
        });
    }

    // Eğer Demo Proje yoksa, listeye ekle
    if (!projects.some(project => project.name === 'Demo Project')) {
        const demoProject = new Project('Demo Project', 'Demo project description', '2023-12-31');
        projects.push(demoProject);
    }

    // Projeleri ekranda göster
    displayProjects(projects);
}

export default loadProjectsFromLocalStorage;

