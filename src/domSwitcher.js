

import { contentDom } from './DOMposter';



export const domChecker = (() => {
    function checker(selection) {
        if (selection === 'Today:') {
            contentDom.posts.domPoster(contentDom.posts.Today)
        }
        if (selection === 'Projects:') {
            contentDom.posts.domPoster(contentDom.posts.Projects)
        }
        if (selection === 'Personal:') {
            contentDom.posts.domPoster(contentDom.posts.Personal)
        }
        if (selection === 'Work:') {
            contentDom.posts.domPoster(contentDom.posts.Work)
        }
    }

    function changeOfSelection() {
        const today = document.querySelector('.today');
        const projects = document.querySelector('.projects');
        const personal = document.querySelector('.personal');
        const work = document.querySelector('.work');
        const selection = document.querySelector('.selection')
        const icons = document.querySelectorAll('.icons div');
        const todayIcon = document.querySelector('.today-icon');
        const projectsIcon = document.querySelector('.projects-icon');
        const personalIcon = document.querySelector('.personal-icon');
        const workIcon = document.querySelector('.work-icon');
        today.classList.add('highlighted');
        todayIcon.classList.add('highlighted-icons');

        

        function handleSelectionChange(selectedText) {
            selection.textContent = selectedText;
            domChecker.checker(selection.textContent);
        }
        function removeHighlightClass() {
            [today, projects, personal, work].forEach((element) => {
                element.classList.remove('highlighted');
            });
            icons.forEach((icon) => {
                icon.classList.remove('highlighted-icons');
            });
        }

        today.addEventListener('click', () => {
            handleSelectionChange('Today:');
            removeHighlightClass();
            today.classList.add('highlighted')
            todayIcon.classList.add('highlighted-icons');
            console.log(contentDom.posts.Today)
        });
        projects.addEventListener('click', () => {
            handleSelectionChange('Projects:');
            
            removeHighlightClass();
            projects.classList.add('highlighted')
            projectsIcon.classList.add('highlighted-icons');
        });
        personal.addEventListener('click', () => {
            handleSelectionChange('Personal:');
            removeHighlightClass();
            personal.classList.add('highlighted')
            personalIcon.classList.add('highlighted-icons');
        });
        work.addEventListener('click', () => {
            handleSelectionChange('Work:');
            removeHighlightClass();
            work.classList.add('highlighted')
            workIcon.classList.add('highlighted-icons');
        });
        domChecker.checker(selection.textContent);
    }

    return {
        checker,
        changeOfSelection,
    };
})();

