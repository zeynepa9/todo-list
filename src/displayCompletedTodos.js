
import { todos } from './submitTodo.js';
import displayTodoItems from './displayTodoItems.js';

function displayCompletedTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; 
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';


    todos.filter(todo => todo.completed).forEach(completedTodo => {
        displayTodoItems(completedTodo);
    });
}

export default displayCompletedTodos;