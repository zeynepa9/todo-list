
  import { deleteItem } from './deleteItem.js';
  import saveTodosToLocalStorage from './saveTodosToLocalStorage.js';

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