import saveTodosToLocalStorage from './saveTodosToLocalStorage.js'; 
import displayTodoItems from './displayTodoItems.js';
import { projects } from './submitProject.js'; // Projeleri içe aktar

class Todo {
  constructor(title, description, dueDate, priority,projectId,projectName) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectId = projectId;
    this.projectName = projectName;
    this.completed = false;
  }
}

// Görevleri saklayacak bir liste 
const todos = [];

// Görev eklemek için bir işlev 
function submitTodo(projectId) {
  // Input alanlarından değerleri al
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;

  // Yeni bir Todo nesnesi 
  const newTodo = new Todo(title, description, dueDate, priority, projectId);
  // console.log('New todo id:', newTodo.id); 

  // Todos listesine ekle
  todos.push(newTodo);

   // Todo'yu seçilen projeye ekle
  const selectedProject = projects.find(project => project.id === projectId);
  if (selectedProject) {
    selectedProject.todos.push(newTodo);
  } else {
    // Varsayılan bir proje belirlenir veya hata fırlatılır
    console.error('Selected project not found');
  }

  // Yeni todo'yu ekrana ekle
  displayTodoItems(newTodo);

  // Local storage'a kaydet
  saveTodosToLocalStorage();

  // Formu kapat
  const formContainer = document.getElementById('form-container');
  if (formContainer) {
    formContainer.remove();
  }
}

export { submitTodo, todos, Todo };






