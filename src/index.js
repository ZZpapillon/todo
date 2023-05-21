import './style.css';
import { ProjectGen } from './projectgenerator'
import { createForm } from './form';
import { contentDom } from './DOMposter';
import { domChecker } from './domSwitcher';
import { saveProjectsToLocalStorage, getProjectsFromLocalStorage, removeFromLocalStorage } from './storage';


console.log('Radi radi')


const container = document.querySelector('.container');
const header = document.querySelector('.header');
const headerIcon = document.querySelector('.header-icon');
const headerName = document.querySelector('.header-name');
const sidebar = document.querySelector('.sidebar');
const icons = document.querySelector('.icons');
const todayIcon = document.querySelector('.today-icon');
const projectsIcon = document.querySelector('.projects-icon');
const personalIcon = document.querySelector('.personal-icon');
const workIcon = document.querySelector('.work-icon');
const todos = document.querySelector('.todos');
const today = document.querySelector('.today');
const projects = document.querySelector('.projects');
const personal = document.querySelector('.personal');
const work = document.querySelector('.work');
const content = document.querySelector('.content');
const footer = document.querySelector('.footer');



// Create a new div element
const selection = document.createElement('div');
selection.classList.add('selection');
selection.textContent = 'Today:';

// Append the selection div to the content element
content.appendChild(selection);


const clickButton = document.createElement('button');
clickButton.classList.add('newProject')
clickButton.textContent = 'Click';

// Append the button to the content element
content.appendChild(clickButton);


clickButton.addEventListener('click', () => {
    createForm((category, title, dueDate, description, priority) => {
        const project = new ProjectGen(category, title, dueDate, description, priority);
        contentDom.posts.domManipulator(project)
        domChecker.checker(selection.textContent)
        saveProjectsToLocalStorage()
        
        
        
        
        
    });
});
domChecker.changeOfSelection();


console.log(selection.textContent)




// // Example usage:
const newProject = {
    category: 'Projects',
    title: 'New Project',
    description: 'Description of the new project',
    priority: 'blue',
    dueDate: '2023-05-31',
};

contentDom.posts.domManipulator(newProject)



// Retrieve the saved projects from local storage and update contentDom.posts when the page is loaded
window.addEventListener('load', () => {
    getProjectsFromLocalStorage();
    domChecker.checker(selection.textContent);
});

