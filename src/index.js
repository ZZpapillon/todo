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
clickButton.classList.add('newProject');
clickButton.textContent = 'New ToDo';




// Create container-stars div
const containerStars = document.createElement('div');
containerStars.id = 'container-stars';

// Create stars div
const stars = document.createElement('div');
stars.id = 'stars';

// Append stars div to container-stars div
containerStars.appendChild(stars);

// Create glow div
const glow = document.createElement('div');
glow.id = 'glow';

// Create circle divs
const circle1 = document.createElement('div');
circle1.classList.add('circle');
const circle2 = document.createElement('div');
circle2.classList.add('circle');

// Append circle divs to glow div
glow.appendChild(circle1);
glow.appendChild(circle2);

// Append container-stars and glow to clickButton
clickButton.appendChild(containerStars);
clickButton.appendChild(glow);


// Append the button to the content element
content.appendChild(clickButton);



clickButton.addEventListener('click', () => {
    createForm((category, title, dueDate, description, priority) => {
        const checked = false
        const project = new ProjectGen(category, title, dueDate, description, priority, checked);
        
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
    title: 'Example Project: Click on me!',
    description: `This is a ToDo App that has a lot of functions and can remember your todos after you leave
                When clicking New Todo,you can choose category,title,description,level of priority and dueDate.
                You can exit form by clicking ESC if you change your mind. After finishing todo,you can click on circle left and mark it or just delete it on x button on the right.
                You also have option to click left on specific categories you want to see.
                Your projects are formated by dates.
                You can even edit description once you make a new Todo,clicking on it and after editing pressing ESC.
                 Have fun!`,
    priority: 'red',
    dueDate: '2 Years Away (July 12,2025)',
    checked: false
};





// Retrieve the saved projects from local storage and update contentDom.posts when the page is loaded
window.addEventListener('load', () => {
    getProjectsFromLocalStorage();
    
    domChecker.checker(selection.textContent);
});

contentDom.posts.domManipulator(newProject)
localStorage.clear()
