import saveTodosToLocalStorage from './saveTodosToLocalStorage.js'; 
import displayTodoItems from './displayTodoItems.js';

class Todo {
  constructor(title, description, dueDate, priority) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}

// Görevleri saklayacak bir liste oluşturun
const todos = [];

// Görev eklemek için bir işlev tanımlayın
function submitTodo() {
  // Input alanlarından değerleri al
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;

  // Yeni bir Todo nesnesi oluşturun
  const newTodo = new Todo(title, description, dueDate, priority);
  // console.log('New todo id:', newTodo.id); 

  // Todos listesine ekleyin
  todos.push(newTodo);

  // Yeni todo'yu ekrana ekleyin
  displayTodoItems(newTodo);

  // Local storage'a kaydedin
  saveTodosToLocalStorage();

  // Formu kapatın
  const formContainer = document.getElementById('form-container');
  if (formContainer) {
    formContainer.remove();
  }
}

export { submitTodo, todos, Todo };






