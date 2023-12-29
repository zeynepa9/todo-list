import { projects } from './submitProject.js'; 
import { deleteProject } from './deleteProject.js';
import displayProjectItems from './displayProjectItems.js';


function displayProjects(projectsToShow) {
  const projectList = document.getElementById('project-list');
  if (!projectList) {
      console.error("Project list element not found!");
      return;
  }

  projectList.innerHTML = ''; 

  // Sadece verilen projeleri dolaş ve arayüze ekle
  projectsToShow.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item');

      const projectName = document.createElement('span');
      projectName.classList.add('project-name');
      projectName.textContent = project.name;

      const projectDescription = document.createElement('p');
      projectDescription.classList.add('project-description');
      projectDescription.textContent = project.description;

      const projectDueDate = document.createElement('p');
      projectDueDate.classList.add('project-due-date');
      projectDueDate.textContent = `Due Date: ${project.dueDate}`;

    // Details button
    // const detailsButton = document.createElement('button');
    // detailsButton.textContent = 'Details';
    // detailsButton.classList.add('details-project-button');
    // detailsButton.dataset.projectId = project.id;
    // detailsButton.addEventListener('click', function(event) {
       
    //     displayProjectItems(event.currentTarget.dataset.projectId);
    // });


      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-project-button');
      deleteButton.dataset.projectId = project.id;
      deleteButton.addEventListener('click', function(event) {
    
          deleteProject(event.currentTarget.dataset.projectId);
      });


      projectItem.appendChild(projectName);
      projectItem.appendChild(projectDescription);
      projectItem.appendChild(projectDueDate);
      // projectItem.appendChild(detailsButton);
      projectItem.appendChild(deleteButton);

      projectList.appendChild(projectItem);
  });
}

export default displayProjects;