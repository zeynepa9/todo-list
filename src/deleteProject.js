import { projects } from './submitProject.js'; 
import saveProjectsToLocalStorage from './saveProjectsToLocalStorage.js'; 

function deleteProject(projectId) {
    // console.log('Deleting item with id:', todoId);
    // Todos dizisinde, verilen id ile eşleşen todo öğesinin index'ini bul
    const projectIndex = projects.findIndex(project => project.id === projectId);

    // Eğer bu index mevcutsa, yani -1 değilse, todo öğesini bulduk demektir
    if (projectIndex !== -1) {
        // Todos dizisinden bu todo öğesini kaldır
        projects.splice(projectIndex, 1);

        // DOM'dan bu todo öğesinin gösterildiği elemanı bul ve kaldır
        const itemToRemove = document.querySelector(`[data-project-id="${projectId}"]`).closest('.project-item');
        if (itemToRemove) {
            itemToRemove.remove();
        }

        // Değişiklikleri local storage'a kaydet
        saveProjectsToLocalStorage();
    }
}

// Fonksiyonu dışa aktar, böylece başka dosyalardan import edilebilir
export { deleteProject };
