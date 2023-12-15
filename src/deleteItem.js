import { todos } from './submitTodo.js'; 
import saveTodosToLocalStorage from './saveTodosToLocalStorage.js'; 

function deleteItem(todoId) {
    // console.log('Deleting item with id:', todoId);
    // Todos dizisinde, verilen id ile eşleşen todo öğesinin index'ini bul
    const todoIndex = todos.findIndex(todo => todo.id === todoId);

    // Eğer bu index mevcutsa, yani -1 değilse, todo öğesini bulduk demektir
    if (todoIndex !== -1) {
        // Todos dizisinden bu todo öğesini kaldır
        todos.splice(todoIndex, 1);

        // DOM'dan bu todo öğesinin gösterildiği elemanı bul ve kaldır
        const itemToRemove = document.querySelector(`[data-todo-id="${todoId}"]`).closest('.todo-item');
        if (itemToRemove) {
            itemToRemove.remove();
        }

        // Değişiklikleri local storage'a kaydet
        saveTodosToLocalStorage();
    }
}

// Fonksiyonu dışa aktar, böylece başka dosyalardan import edilebilir
export { deleteItem };
