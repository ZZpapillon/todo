import { contentDom } from './DOMposter';

// storage.js

export function saveProjectsToLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(contentDom.posts));
}

export function getProjectsFromLocalStorage() {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
        contentDom.posts.Today = savedPosts.Today || [];
        contentDom.posts.Projects = savedPosts.Projects || [];
        contentDom.posts.Personal = savedPosts.Personal || [];
        contentDom.posts.Work = savedPosts.Work || [];
    }
}

export function removeFromLocalStorage(project) {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || {};
    const updatedPosts = {
        Today: removeProjectFromArray(savedPosts.Today, project),
        Projects: removeProjectFromArray(savedPosts.Projects, project),
        Personal: removeProjectFromArray(savedPosts.Personal, project),
        Work: removeProjectFromArray(savedPosts.Work, project),
    };
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
}

function removeProjectFromArray(array, project) {
    return array.filter((p) => p !== project);
}
