import { todos } from './submitTodo.js';
import displayTodoItems from './displayTodoItems.js';

function displayImportantTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; 

    const projectList = document.getElementById('project-list');
        projectList.innerHTML = '';

    todos.filter(todo => todo.priority === 'High').forEach(importantTodo => {
        displayTodoItems(importantTodo);
    });
}

export default displayImportantTodos;
