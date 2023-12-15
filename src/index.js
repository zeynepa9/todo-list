import './style.css';
import loadHome from './loadHome';
import loadTodosFromLocalStorage from './loadTodosFromLocalStorage';


console.log('Todo App is working!');


document.addEventListener('DOMContentLoaded', () => {
    loadTodosFromLocalStorage();
    loadHome();
});






