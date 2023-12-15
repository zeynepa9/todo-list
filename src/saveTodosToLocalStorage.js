import { todos } from './submitTodo.js';

function saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

export default saveTodosToLocalStorage;