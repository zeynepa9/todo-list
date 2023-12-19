import displayTaskForm from './displayTaskForm';
import displayToday from './displayToday';
import displayUpcoming from './displayUpcoming';
import allItems from './allItems';
import displayImportantTodos from './displayImportantTodos';
import displayCompletedTodos from './displayCompletedTodos';
import displayProjectForm from './displayProjectForm';
import displayProjectsOnProjects from './displayProjectsOnProjects';



function loadHome() {
    const content = document.getElementById('content');

    const todoList = document.getElementById('todo-list') || document.createElement('div');
    todoList.id = 'todo-list';
    
    const projectList = document.getElementById('project-list') || document.createElement('div');
    projectList.id = 'project-list'; // Burada yanlışlıkla todoList.id olarak ayarlanıyor
    

    
    // Sidebar creation
    const sidebar = document.createElement('aside');
    sidebar.id = 'sidebar';
    
    
     
    // all Items Link
    const allItemsLink = document.createElement('div');
    allItemsLink.textContent = 'All';
    allItemsLink.classList.add('sidebar-item');
    allItemsLink.addEventListener('click', allItems); 


    // Today link
    const todayLink = document.createElement('div');
    todayLink.textContent = 'Today';
    todayLink.classList.add('sidebar-item');
    todayLink.addEventListener('click', displayToday); 
  
 
    
    // Next 7 days link
    const upcoming = document.createElement('div');
    upcoming.textContent = 'Upcoming';
    upcoming.classList.add('sidebar-item');
    upcoming.addEventListener('click', displayUpcoming); 
    
    // Important link
    const importantLink = document.createElement('div');
    importantLink.textContent = 'Important';
    importantLink.classList.add('sidebar-item');
    importantLink.addEventListener('click', displayImportantTodos); 
    
    // Completed link
    const completedLink = document.createElement('div');
    completedLink.textContent = 'Completed';
    completedLink.classList.add('sidebar-item');
    completedLink.addEventListener('click', displayCompletedTodos);
    
    // Projects container
    const projectsContainer = document.createElement('div');
    projectsContainer.textContent = 'Projects';
    projectsContainer.classList.add('sidebar-item');
    projectsContainer.addEventListener('click', displayProjectsOnProjects);
    
    
    // Add button for new project
    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = 'New Project';
    addProjectButton.classList.add('add-project-btn');
    addProjectButton.addEventListener('click', displayProjectForm);
    
    // Append sidebar items to sidebar
     sidebar.appendChild(allItemsLink);
    sidebar.appendChild(todayLink);
    sidebar.appendChild(upcoming);
    sidebar.appendChild(importantLink);
    sidebar.appendChild(completedLink);
    sidebar.appendChild(projectsContainer);
    sidebar.appendChild(addProjectButton);
    
    // Main title
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = 'TODO - Yet Another To Do App';
    mainTitle.classList.add('main-title');

    // Main content area
    const mainContent = document.createElement('section');
    mainContent.id = 'main-content';

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = '+ Add new task';
    addTaskButton.id = 'add-task-btn';
    addTaskButton.addEventListener('click', displayTaskForm); 


    

    // Append main elements to the content
    mainContent.appendChild(addTaskButton);

    
    content.textContent = '';  // Clear out any existing content
    content.appendChild(sidebar);
    content.appendChild(mainTitle);
    content.appendChild(mainContent);
    content.appendChild(todoList);
    content.appendChild(projectList);


 
}








export default loadHome;
