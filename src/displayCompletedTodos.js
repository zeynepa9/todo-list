
import { todos } from './submitTodo.js';
import displayTodoItems from './displayTodoItems.js';

function displayCompletedTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Mevcut görevleri temizle

    todos.filter(todo => todo.completed).forEach(completedTodo => {
        displayTodoItems(completedTodo);
    });
}

export default displayCompletedTodos;