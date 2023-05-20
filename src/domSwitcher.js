

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

        function handleSelectionChange(selectedText) {
            selection.textContent = selectedText;
            domChecker.checker(selection.textContent);
        }

        today.addEventListener('click', () => {
            handleSelectionChange('Today:');
            console.log(contentDom.posts.Today)
        });
        projects.addEventListener('click', () => {
            handleSelectionChange('Projects:');
        });
        personal.addEventListener('click', () => {
            handleSelectionChange('Personal:');
        });
        work.addEventListener('click', () => {
            handleSelectionChange('Work:');
        });
        domChecker.checker(selection.textContent);
    }

    return {
        checker,
        changeOfSelection,
    };
})();

