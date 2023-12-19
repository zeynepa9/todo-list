import { submitProject } from './submitProject.js'; 

let formContainer = null; // Form container için global referans

function displayProjectForm() {
    // Form zaten varsa, sadece göster
    if (!formContainer) {
        // Yeni form container oluştur
        formContainer = document.createElement('div');
        formContainer.id = 'project-form-container'; // ID'ye 'project-' öneki eklendi
        formContainer.classList.add('popup');

        // Proje başlığı için input oluştur
        const projectTitleInput = document.createElement('input');
        projectTitleInput.id = 'project-title-input'; // ID'ye 'project-' öneki eklendi
        projectTitleInput.placeholder = 'Project Title';
        projectTitleInput.type = 'text';

        // Proje açıklaması için textarea oluştur
        const projectDescriptionInput = document.createElement('textarea');
        projectDescriptionInput.id = 'project-description-input'; // ID'ye 'project-' öneki eklendi
        projectDescriptionInput.placeholder = 'Project Description';

        // Bitiş tarihi için input oluştur
        const projectDueDateInput = document.createElement('input');
        projectDueDateInput.id = 'project-due-date-input'; // ID'ye 'project-' öneki eklendi
        projectDueDateInput.type = 'date';

        // Proje ekleme butonu oluştur
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Add Project';
        submitButton.id = 'project-submit-button'; // ID'ye 'project-' öneki eklendi
        submitButton.type = 'button';
        submitButton.addEventListener('click', function(event) {
            event.preventDefault(); // Form gönderimini engelleyin
            submitProject(); // Proje ekleme fonksiyonunu çalıştırın
        });

        // Form elemanlarını container'a ekle
        formContainer.appendChild(projectTitleInput);
        formContainer.appendChild(projectDescriptionInput);
        formContainer.appendChild(projectDueDateInput);
        formContainer.appendChild(submitButton);

        // Pop-up'ı kapatma butonu (opsiyonel)
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.id = 'project-close-button'; // ID'ye 'project-' öneki eklendi
        closeButton.onclick = function () {
            formContainer.style.display = 'none';
        };
        formContainer.appendChild(closeButton);

        // Form container'ı sayfaya ekle
        document.body.appendChild(formContainer);
    }

    //eklendi

    if (formContainer) {
        document.getElementById('project-title-input').value = '';
        document.getElementById('project-description-input').value = '';
        document.getElementById('project-due-date-input').value = '';
    }

    //eklendi

    // Formu göster
    formContainer.style.display = 'block';
}

export default displayProjectForm;
