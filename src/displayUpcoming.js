import { isToday } from 'date-fns';
import { todos } from './submitTodo.js'; 
import { projects } from './submitProject.js';
import displayTodoItems from './displayTodoItems.js';
import displayProjects from './displayProjects.js';



    function displayUpcoming() {
        // console.log("Upcoming link clicked");
    
       
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';

        const projectList = document.getElementById('project-list');
        projectList.innerHTML = '';
    
        // Bugünün tarihine sahip todo'ları filtrele
        const upcomingTodos = todos.filter(todo => !isToday(new Date(todo.dueDate)));
        // const upcomingProjects = projects.filter(project => !isToday(new Date(project.dueDate)));
    
        // Bugünün todo'larını göster
        upcomingTodos.forEach(todo => displayTodoItems(todo));

        // displayProjects(upcomingProjects);
    }
    

    export default displayUpcoming;






