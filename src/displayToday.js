import { isToday } from 'date-fns';
import { todos } from './submitTodo.js'; // veya todos dizisinin tanımlandığı dosya
import displayTodoItems from './displayTodoItems.js';




    function displayToday() {
        
    
        // Mevcut todo listesini temizleyin
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
    
        // Bugünün tarihine sahip todo'ları filtrele
        const todayTodos = todos.filter(todo => isToday(new Date(todo.dueDate)));
    
        // Bugünün todo'larını göster
        todayTodos.forEach(todo => displayTodoItems(todo));
    }
    

    export default displayToday;