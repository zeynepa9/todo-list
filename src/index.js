import './style.css';
import loadHome from './loadHome';
import loadTodosFromLocalStorage from './loadTodosFromLocalStorage';
import loadProjectsFromLocalStorage from './loadProjectsFromLocalStorage';



console.log('Todo App is working!');


document.addEventListener('DOMContentLoaded', () => {
    loadTodosFromLocalStorage();
    loadProjectsFromLocalStorage();
    loadHome();

});






