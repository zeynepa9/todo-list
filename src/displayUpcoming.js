import { isToday } from 'date-fns';
import { todos } from './submitTodo.js'; // veya todos dizisinin tanımlandığı dosya
import displayTodoItems from './displayTodoItems.js';



    function displayUpcoming() {
        // console.log("Upcoming link clicked");
    
        // Mevcut todo listesini temizleyin
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
    
        // Bugünün tarihine sahip todo'ları filtrele
        const upcomingTodos = todos.filter(todo => !isToday(new Date(todo.dueDate)));
    
        // Bugünün todo'larını göster
        upcomingTodos.forEach(todo => displayTodoItems(todo));
    }
    

    export default displayUpcoming;