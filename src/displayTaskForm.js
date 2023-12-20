
import { submitTodo } from './submitTodo.js'; 
import { projects } from './submitProject.js';
let activePopup = null; // Aktif pop-up'ı saklamak için bir değişken


function displayTaskForm() {

    if (activePopup) {
        activePopup.style.display = 'none';
      }

      
    const popupId = 'form-container-' + Date.now();

  // Mevcut pop-up konteyneri varsa onu göster
  const existingPopup = document.getElementById(popupId);
  if (existingPopup) {
    existingPopup.style.display = 'block';
    return;
  }
    // Yeni pop-up konteyneri oluşturma
    const formContainer = document.createElement('div');
    formContainer.id = 'form-container';
    formContainer.classList.add('popup');
  
    // Form elemanları burada oluşturulur...
    const titleInput = document.createElement('input');
    titleInput.id = 'title';
    titleInput.placeholder = 'Task Title';
    titleInput.type = 'text';
  
    // Açıklama için textarea
    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'description';
    descriptionInput.placeholder = 'Task Description';
  
    // Bitiş tarihi için input
    const dueDateInput = document.createElement('input');
    dueDateInput.id = 'due-date';
    dueDateInput.type = 'date';
  
    // Öncelik durumu için select
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    ['High', 'Low'].forEach(priority => {
      const option = document.createElement('option');
      option.value = priority;
      option.textContent = priority;
      prioritySelect.appendChild(option);
    });
  
    // Notlar için textarea
    const notesInput = document.createElement('textarea');
    notesInput.id = 'notes';
    notesInput.placeholder = 'Additional Notes';


 
  // Proje seçimi için dropdown menü
  const projectSelect = document.createElement('select');
  projectSelect.id = 'project-select';

  // 'Demo Project' ID'sini bul
  const demoProject = projects.find(project => project.name === 'Demo Project');
  let demoProjectId = demoProject ? demoProject.id : 'demo'; // Varsayılan değer olarak 'demo' kullan

  projects.forEach(project => {
      const option = document.createElement('option');
      option.value = project.id;
      option.textContent = project.name;
      projectSelect.appendChild(option);

      // Eğer bu 'Demo Project' ise, seçili yap
      if (project.id === demoProjectId) {
          option.selected = true;
      }
  });


  
   
    // Gönder buton
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add Task';
    submitButton.id = 'submit-task';
    submitButton.type = 'button'; 

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        const selectedProjectId = projectSelect.value;
        submitTodo(selectedProjectId); // Seçilen projenin ID'sini geçir
      });
      

  
    // Form elemanlarını form container'a ekle
    formContainer.appendChild(projectSelect); //added
    formContainer.appendChild(titleInput);
    formContainer.appendChild(descriptionInput);
    formContainer.appendChild(dueDateInput);
    formContainer.appendChild(prioritySelect);
    formContainer.appendChild(notesInput);
    formContainer.appendChild(submitButton);
  
   
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = function () {
        formContainer.remove();
    };
    formContainer.appendChild(closeButton);
  
    // Form container'ı sayfaya ekle
    const body = document.body;
    body.appendChild(formContainer);

   
  }

 
  
  export default displayTaskForm;
  