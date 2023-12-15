import { todos } from './submitTodo.js'; // veya todos dizisinin tanımlandığı dosya
import displayTodoItems from './displayTodoItems.js';



    function allItems() {
        
    
        // Mevcut todo listesini temizleyin
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';


        todos.forEach(todo => displayTodoItems(todo));
    }
    

    export default allItems;