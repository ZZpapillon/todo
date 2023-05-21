import { contentDom } from './DOMposter';

// storage.js

export function saveProjectsToLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(contentDom.posts));
}

export function getProjectsFromLocalStorage() {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
        // Clear existing posts in each category array
        contentDom.posts.Today.length = 0;
        contentDom.posts.Projects.length = 0;
        contentDom.posts.Personal.length = 0;
        contentDom.posts.Work.length = 0;

        

        // Update the category arrays with retrieved data
        savedPosts.Today.forEach((project) => {
            contentDom.posts.domManipulator(project);
            
        });
    }
}


