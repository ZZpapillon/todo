

const today = document.querySelector('.today');
const projects = document.querySelector('.projects');
const personal = document.querySelector('.personal');
const work = document.querySelector('.work');
const content = document.querySelector('.content');


export const addEventListeners = {
projects(event, selection, contentDom){
    event.preventDefault();
    selection.textContent = 'Projects:'
    contentDom.posts.Projects.forEach((project) => {
        contentDom.posts.domPoster()
    })
},

    personal(event, selection, contentDom) {
    event.preventDefault();
    selection.textContent = 'Personal:'
    contentDom.posts.Personal.forEach((project) => {
        contentDom.posts.domPoster()
    })
},

    work(event, selection, contentDom)  {
    event.preventDefault();
    selection.textContent = 'Work:'
    contentDom.posts.Work.forEach((project) => {
        contentDom.posts.domPoster()
    })
}
}