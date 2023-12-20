import { projects } from './submitProject.js'; 



function displayProjectItems(projectId) {
    
    const project = projects.find(p => p.id === projectId);
    if (!project) {
      console.error('Project not found!');
      return;
    }
  
    const todoListContainer = document.getElementById('todo-list'); // Todo listesinin görüntüleneceği konteyner
    todoListContainer.innerHTML = ''; 

    console.log('alo');
    console.log('Project todos:', project.todos);

  
   
    project.todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
  
      const todoTitle = document.createElement('span');
      todoTitle.textContent = todo.title;
      todoTitle.classList.add('todo-title');
  
      const todoDescription = document.createElement('p');
      todoDescription.textContent = todo.description;
      todoDescription.classList.add('todo-description');

 
  
  
      todoItem.appendChild(todoTitle);
      todoItem.appendChild(todoDescription);
      
  
      todoListContainer.appendChild(todoItem);
    });
  }
  

  export default displayProjectItems;