import { projects } from './submitProject.js'; // Projeleri içe aktar
import { deleteProject } from './deleteProject.js';


function displayProjects(projectsToShow) {
  const projectList = document.getElementById('project-list');
  if (!projectList) {
      console.error("Project list element not found!");
      return;
  }

  projectList.innerHTML = ''; // Mevcut listeyi temizle

  // Sadece verilen projeleri dolaş ve arayüze ekle
  projectsToShow.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item');

      const projectName = document.createElement('span');
      projectName.classList.add('project-name');
      projectName.textContent = project.name;

      const projectDescription = document.createElement('p');
      projectDescription.textContent = project.description;

      const projectDueDate = document.createElement('p');
      projectDueDate.textContent = `Due Date: ${project.dueDate}`;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-project-button');
      deleteButton.dataset.projectId = project.id;
      deleteButton.addEventListener('click', function(event) {
          // Burada proje silme işlevini çağırabilirsiniz
          deleteProject(event.currentTarget.dataset.projectId);
      });


      projectItem.appendChild(projectName);
      projectItem.appendChild(projectDescription);
      projectItem.appendChild(projectDueDate);
      projectItem.appendChild(deleteButton);

      projectList.appendChild(projectItem);
  });
}

export default displayProjects;