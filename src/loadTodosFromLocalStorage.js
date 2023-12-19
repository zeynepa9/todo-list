import { todos, Todo } from './submitTodo.js';
import displayTodoItems from './displayTodoItems.js';



function loadTodosFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        const loadedTodos = JSON.parse(storedTodos);
        loadedTodos.forEach(todoData => {
            // Todo sınıfının örneklerini oluşturun
            const todo = new Todo(
              todoData.title, 
              todoData.description, 
              todoData.dueDate, 
              todoData.priority, 
              todoData.projectId,
              todoData.projectName // Proje adı bilgisini Todo nesnesine ekleyin
            );
            todos.push(todo);
            displayTodoItems(todo);
        });
    }
}





export default loadTodosFromLocalStorage;