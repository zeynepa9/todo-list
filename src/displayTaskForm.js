
import { submitTodo } from './submitTodo.js'; 
let activePopup = null; // Aktif pop-up'ı saklamak için bir değişken

//new
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
  
   
    // Gönder buton
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add Task';
    submitButton.id = 'submit-task';
    submitButton.type = 'button'; 

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Form gönderimini engelleyin
        submitTodo(); // Todo ekleme fonksiyonunu çalıştırın
      });
      

  
    // Form elemanlarını form container'a ekle
    formContainer.appendChild(titleInput);
    formContainer.appendChild(descriptionInput);
    formContainer.appendChild(dueDateInput);
    formContainer.appendChild(prioritySelect);
    formContainer.appendChild(notesInput);
    formContainer.appendChild(submitButton);
  
    // Pop-up'ı kapatma butonu (opsiyonel)
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
  