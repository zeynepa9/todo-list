import { todos } from './submitTodo.js';
import displayTodoItems from './displayTodoItems.js';


function loadTodosFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        const loadedTodos = JSON.parse(storedTodos);
        loadedTodos.forEach(todo => {
            todos.push(todo);
            displayTodoItems(todo);
        });
    }
}



export default loadTodosFromLocalStorage;