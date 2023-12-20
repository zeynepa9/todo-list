import { todos } from './submitTodo.js'; 
import displayTodoItems from './displayTodoItems.js';



    function allItems() {
        
    
  
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';

        // const projectList = document.getElementById('project-list');
        // projectList.innerHTML = '';


        todos.forEach(todo => displayTodoItems(todo));
    }
    

    export default allItems;