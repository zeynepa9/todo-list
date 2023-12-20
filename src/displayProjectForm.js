import { submitProject } from './submitProject.js'; 

let formContainer = null; // Form container için global referans

function displayProjectForm() {
    // Form zaten varsa, sadece göster
    if (!formContainer) {
        // Yeni form container oluştur
        formContainer = document.createElement('div');
        formContainer.id = 'project-form-container'; 
        formContainer.classList.add('popup');

        // Proje başlığı için input oluştur
        const projectTitleInput = document.createElement('input');
        projectTitleInput.id = 'project-title-input';
        projectTitleInput.placeholder = 'Project Title';
        projectTitleInput.type = 'text';

        // Proje açıklaması için textarea oluştur
        const projectDescriptionInput = document.createElement('textarea');
        projectDescriptionInput.id = 'project-description-input'; 
        projectDescriptionInput.placeholder = 'Project Description';

        // Bitiş tarihi için input oluştur
        const projectDueDateInput = document.createElement('input');
        projectDueDateInput.id = 'project-due-date-input'; 
        projectDueDateInput.type = 'date';

        // Proje ekleme butonu oluştur
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Add Project';
        submitButton.id = 'project-submit-button'; 
        submitButton.type = 'button';
        submitButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            submitProject();
        });

        // Form elemanlarını container'a ekle
        formContainer.appendChild(projectTitleInput);
        formContainer.appendChild(projectDescriptionInput);
        formContainer.appendChild(projectDueDateInput);
        formContainer.appendChild(submitButton);


        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.id = 'project-close-button'; 
        closeButton.onclick = function () {
            formContainer.style.display = 'none';
        };
        formContainer.appendChild(closeButton);

        // Form container'ı sayfaya ekle
        document.body.appendChild(formContainer);
    }

    

    if (formContainer) {
        document.getElementById('project-title-input').value = '';
        document.getElementById('project-description-input').value = '';
        document.getElementById('project-due-date-input').value = '';
    }

 

    // Formu göster
    formContainer.style.display = 'block';
}

export default displayProjectForm;
