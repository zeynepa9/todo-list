import saveProjectsToLocalStorage from './saveProjectsToLocalStorage.js'; 
import displayProjects from './displayProjects.js';



class Project {
  constructor(name, description, dueDate) {
    this.id = Date.now().toString();
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.todos = []; // Bu projeye ait todo'ları saklamak için
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

  
  // Projeleri saklayacak bir liste 
  const projects = [];
  

  
  function submitProject() {
    // Input alanlarından değerleri alın
    const name = document.getElementById('project-title-input').value;
    const description = document.getElementById('project-description-input').value;
    const dueDate = document.getElementById('project-due-date-input').value;
  
    // Yeni bir Project nesnesi
    const newProject = new Project(name, description, dueDate);
  
    // add projects to new  Projects list
    projects.push(newProject);
  
    // Projeleri local storage'a kaydet
    saveProjectsToLocalStorage();
  
    // Yeni projeyi ekranda göster
    displayProjects(projects); 

    // Form alanlarını temizle
    document.getElementById('project-title-input').value = '';
    document.getElementById('project-description-input').value = '';
    document.getElementById('project-due-date-input').value = '';

    // close the form (creates a bug: cannot create another project without refreshing the page. reason: it removes items completely from the DOM.)
    // const formContainer = document.getElementById('project-form-container');
    // if (formContainer) {
    //     formContainer.remove(); // Eğer formu tamamen kaldırmak istersem
    // }


    //hide the form
    const formContainer = document.getElementById('project-form-container');
    if (formContainer) {
        formContainer.style.display = 'none';
    }




}
  
 

  export { submitProject, projects, Project };
  
