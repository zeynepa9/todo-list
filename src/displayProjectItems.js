import { projects } from './submitProject.js'; // Projeleri içe aktar



function displayProjectItems(projectId) {
    // projectId'yi kullanarak ilgili projeyi bul
    const project = projects.find(p => p.id === projectId);
    if (!project) {
      console.error('Project not found!');
      return;
    }
  
    const todoListContainer = document.getElementById('todo-list'); // Todo listesinin görüntüleneceği konteyner
    todoListContainer.innerHTML = ''; // Mevcut listeyi temizle

    console.log('alo');
    console.log('Project todos:', project.todos);

  
    // Proje için todo-item'ları dolaş
    project.todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
  
      const todoTitle = document.createElement('span');
      todoTitle.textContent = todo.title;
      todoTitle.classList.add('todo-title');
  
      const todoDescription = document.createElement('p');
      todoDescription.textContent = todo.description;
      todoDescription.classList.add('todo-description');

 
  
      // Diğer todo özelliklerini de benzer şekilde oluşturabilirsiniz
      // ...
  
      // Todo-item'ı konteynere ekle
      todoItem.appendChild(todoTitle);
      todoItem.appendChild(todoDescription);
      // Diğer özellikleri de ekle
      // ...
  
      todoListContainer.appendChild(todoItem);
    });
  }
  

  export default displayProjectItems;