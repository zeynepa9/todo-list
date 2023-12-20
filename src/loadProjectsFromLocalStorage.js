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


// import { Project } from './submitProject.js';
// import { Todo } from './submitTodo.js'; // Eğer Todo sınıfınız varsa
// import displayProjects from './displayProjects.js';
// import { projects } from './submitProject.js'; // Projelerin saklandığı dizi

// function loadProjectsFromLocalStorage() {
//     const storedProjects = localStorage.getItem('projects');
//     if (storedProjects) {
//         const loadedProjects = JSON.parse(storedProjects);
//         loadedProjects.forEach(projectData => {
//             const project = new Project(projectData.name, projectData.description, projectData.dueDate);
//             // Todo'ları yeniden oluştur
//             projectData.todos.forEach(todoData => {
//                 const todo = new Todo(
//                     todoData.title,
//                     todoData.description,
//                     todoData.dueDate,
//                     todoData.priority,
//                     todoData.projectId, // Bu projectId'yi tekrar kontrol edin, gerekli olmayabilir
//                     todoData.projectName,
//                     todoData.completed // Completed durumunu da yükle
//                 );
//                 project.addTodo(todo);
//             });
//             projects.push(project);
//         });
//     }

//     // Eğer Demo Proje yoksa, listeye ekle
//     if (!projects.some(project => project.name === 'Demo Project')) {
//         const demoProject = new Project('Demo Project', 'Demo project description', '2023-12-31');
//         projects.push(demoProject);
//     }

//     // Projeleri ekranda göster
//      displayProjects(projects);
// }

// export default loadProjectsFromLocalStorage;
