import { todos } from './submitTodo.js';
import { projects } from './submitProject.js'; 

function saveTodosToLocalStorage() {
    const todosWithProjectInfo = todos.map(todo => {
        return {
            ...todo,
            projectName: projects.find(project => project.id === todo.projectId)?.name || 'None'
        };
    });
    localStorage.setItem('todos', JSON.stringify(todosWithProjectInfo));
}


export default saveTodosToLocalStorage;