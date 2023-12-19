import { isToday } from 'date-fns';
import { todos } from './submitTodo.js';
import { projects } from './submitProject.js';
import displayTodoItems from './displayTodoItems.js';
import displayProjects from './displayProjects.js';

function displayToday() {
    // Mevcut todo ve proje listesini temizleyin
    const todoList = document.getElementById('todo-list');
    const projectList = document.getElementById('project-list');
    todoList.innerHTML = '';
    projectList.innerHTML = '';

    // Bugünün tarihine sahip todo'ları filtrele
    const todayTodos = todos.filter(todo => isToday(new Date(todo.dueDate)));
    // const todayProjects = projects.filter(project => isToday(new Date(project.dueDate)));

    // Bugünün todo'larını göster
    todayTodos.forEach(todo => displayTodoItems(todo));

    // Bugünün projelerini göster
    // displayProjects(todayProjects);
}

export default displayToday;
