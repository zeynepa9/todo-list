
  import { deleteItem } from './deleteItem.js';
  import { projects } from './submitProject.js'; //
  import saveTodosToLocalStorage from './saveTodosToLocalStorage.js';
  import { getProjectColor } from './getRandomColor.js';


  function displayTodoItems(todo) {

  
    
    const todoList = document.getElementById('todo-list');
    if (!todoList) {
        console.error("Todo list element not found!");
        return;
    }

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    // Create Check Box
    const completedCheckbox = document.createElement('input');
    completedCheckbox.type = 'checkbox';
    completedCheckbox.classList.add('completed-checkbox');
    completedCheckbox.checked = todo.completed || false;



    // Checkbox event listener
    completedCheckbox.addEventListener('change', (event) => {
        // console.log('Checkbox changed:', event.target.checked); 
        todo.completed = event.target.checked;
        // console.log('Updated todo:', todo); 
        saveTodosToLocalStorage(); 

        if(event.target.checked) {
          todoItem.classList.add('completed'); 
        } else {
          todoItem.classList.remove('completed'); 
        }
    });


    // Todo heading  span
    const todoTitle = document.createElement('span');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.title;

    // Label (checkbox + title)
    const label = document.createElement('label');
    label.appendChild(completedCheckbox);
    label.appendChild(todoTitle);


     // Proje adını göster
     const projectInfo = document.createElement('span');
     projectInfo.classList.add('todo-project-info');


   // Seçilen projeyi bul
const selectedProject = projects.find(project => project.id === todo.projectId);
if (selectedProject) {
    // Proje etiketini oluştur ve ekle
    const projectTag = document.createElement('span');
    projectTag.className = 'project-tag';
    projectTag.textContent = selectedProject.name;
    // Fonksiyon ile projenin atanmış rengini al ve arka plan rengi olarak ayarla
    projectTag.style.backgroundColor = getProjectColor(selectedProject.name);
    projectInfo.appendChild(projectTag); // Proje bilgisine etiketi ekle
} else {
    // Eğer proje bulunamazsa veya 'None' ise etiket ekleme
    projectInfo.textContent = 'Project: None';
}
    


    // Other todo info
    const todoDescription = document.createElement('p');
    todoDescription.textContent = todo.description;
    const todoDueDate = document.createElement('p');
    todoDueDate.textContent = `Due Date: ${todo.dueDate}`;
    const todoPriority = document.createElement('p');
    todoPriority.textContent = `Priority: ${todo.priority}`;

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-item-button');
    deleteButton.dataset.todoId = todo.id;
    deleteButton.addEventListener('click', function(event) {
        deleteItem(event.currentTarget.dataset.todoId);
    });

    // add all items to todo item
    todoItem.appendChild(label);
    todoItem.appendChild(projectInfo);
    todoItem.appendChild(todoDescription);
    todoItem.appendChild(todoDueDate);
    todoItem.appendChild(todoPriority);
    todoItem.appendChild(deleteButton);

   
    todoList.appendChild(todoItem);


    if (todo.completed) {
      todoItem.classList.add('completed'); // Üstünü çiz
    } else {
      todoItem.classList.remove('completed'); // Çizgiyi kaldır
    }
}

export default displayTodoItems;