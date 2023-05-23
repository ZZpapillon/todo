import {getProjectsFromLocalStorage, saveProjectsToLocalStorage } from "./storage";
import { domChecker } from "./domSwitcher";
import { parseISO } from 'date-fns';


export const contentDom = (() => {
    const posts = {
        Today: [],
        Projects: [],
        Personal: [],
        Work: [],
        domManipulator: function (project) {
            posts.Today.push(project);
            if (project.category === 'Projects') {
                posts.Projects.push(project);
                // saveProjectsToLocalStorage()
                
            }
            if (project.category === 'Personal') {
                posts.Personal.push(project);
                // saveProjectsToLocalStorage()
                
            }
            if (project.category === 'Work') {
                posts.Work.push(project);
                // saveProjectsToLocalStorage()
                
            }
            
           
        },

        domPoster: function (projectArray) {
            const content = document.querySelector('.content'); // Get the content element
            const existingPosts = content.querySelectorAll('.newPost');
            

            

            // Clear the existingPosts before appending new posts
            existingPosts.forEach((post) => {
                post.remove();
            });
            projectArray.sort((a, b) => {
                const daysA = parseInt(a.dueDate.split(' ')[0]);
                const daysB = parseInt(b.dueDate.split(' ')[0]);
                return daysB - daysA;
            });
            
            projectArray.forEach((project) => {
                
                const newPostWrapper = document.createElement('div');
                newPostWrapper.classList.add('newPostWrapper');
                
                const newPost = document.createElement('div');
                newPost.classList.add('newPost');


               

                
                

               
                

                const category = document.createElement('div');
                category.classList.add('categoryPart');
                category.textContent = project.category;

                const title = document.createElement('div');
                title.classList.add('titlePart');
                title.textContent = project.title;

                const dueDate = document.createElement('div');
                dueDate.classList.add('dueDate');
                dueDate.textContent = project.dueDate;

                const describtion = document.createElement('div');
                describtion.classList.add('describtionPart');
                describtion.innerHTML = project.description;

                const priorityPart = document.createElement('div');
                priorityPart.classList.add('priorityPart');

                const selectedCircle = document.createElement('span');
                selectedCircle.classList.add('priority-circle');
                selectedCircle.style.backgroundColor = project.priority;

                priorityPart.appendChild(selectedCircle);

                const checkbox = document.createElement('label');
                checkbox.classList.add('checkbox-input');

                const innerLabel = document.createElement('label');
                innerLabel.setAttribute('for', 'checkbox');
                checkbox.appendChild(innerLabel);

                const checkboxInput = document.createElement('input');
                checkboxInput.type = 'checkbox';
                checkboxInput.id = 'checkbox';
                checkbox.appendChild(checkboxInput);

                const checkmark = document.createElement('span');
                checkmark.classList.add('checkmark');
                checkbox.appendChild(checkmark);
                
                checkboxInput.checked = project.checked;

                checkboxInput.addEventListener('click', function () {
                    // Toggle the checked property of the project
                    project.checked = !project.checked;

                    // Update the checkbox state
                    checkboxInput.checked = project.checked;

                    // Save the updated projects to localStorage
                    saveProjectsToLocalStorage();
                });




                newPost.addEventListener('click', () => {
                    const activeDescribtion = document.querySelector('.describtionPart.show');

                    if (activeDescribtion) {
                        if (activeDescribtion === describtion) {
                            // Clicked on the same new post, toggle the description visibility
                            activeDescribtion.classList.toggle('show');
                        } else {
                            // Clicked on a different new post, close the active description and open the new one
                            activeDescribtion.classList.remove('show');
                            describtion.classList.add('show');
                        }
                    } else {
                        // No active description, open the clicked new post
                        describtion.classList.add('show');
                    }
                   
                });
                const todos = document.querySelector('.todos');
                todos.addEventListener('click', (event) => {
                    const clickedElement = event.target;
                    const activeDescribtion = document.querySelector('.describtionPart.show');

                    if (activeDescribtion) {
                        activeDescribtion.classList.remove('show');
                    }
                });
                const newProjectElement = document.querySelector('.newProject');
                newProjectElement.addEventListener('click', () => {
                    const activeDescribtion = document.querySelector('.describtionPart.show');

                    if (activeDescribtion) {
                        activeDescribtion.classList.remove('show');
                    }
                });


                describtion.addEventListener('click', function () {
                    describtion.contentEditable = 'true';
                    describtion.focus();
                });

                // Add a blur event listener to save the edited content when focus is lost
                describtion.addEventListener('blur', function () {
                    describtion.contentEditable = 'false';
                    project.description = describtion.textContent; // Save the edited content to the project object or wherever you need it
                    saveProjectsToLocalStorage()
                });

                function handleEscapeKey(event) {
                    if (event.key === 'Escape') {
                        describtion.blur(); // Remove focus from the div
                    }
                }

                document.addEventListener('keydown', handleEscapeKey);



                

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('deleteButton');
                deleteButton.innerHTML = '<span class="text"></span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>';
                
                
                deleteButton.addEventListener('click', (selection) => {
                    const index = projectArray.findIndex((post) => post === project);
                    if (index !== -1) {
                        projectArray.splice(index, 1);
                        newPostWrapper.remove();

                        // Remove the post from the "Today" section
                        const todayPosts = contentDom.posts.Today;
                        const todayIndex = todayPosts.findIndex((post) => post === project);
                        if (todayIndex !== -1) {
                            todayPosts.splice(todayIndex, 1);

                        }

                        // Remove the post from the respective category section
                        const categoryPosts = contentDom.posts[project.category];
                        const categoryIndex = categoryPosts.findIndex((post) => post === project);
                        if (categoryIndex !== -1) {
                            categoryPosts.splice(categoryIndex, 1);

                        }


                        // Remove the project from local storage
                        saveProjectsToLocalStorage()


                        // Update the display for "Today" and the respective category section

                        domChecker.checker(selection)
                    }
                });





        




                newPost.appendChild(deleteButton);
                newPost.appendChild(category);
                newPost.appendChild(title);
                newPost.appendChild(dueDate);
                newPost.appendChild(priorityPart);
                newPost.appendChild(checkbox);

              
                newPostWrapper.appendChild(newPost);
                newPostWrapper.appendChild(describtion);
                
                content.prepend(newPostWrapper);
            });
        },
    };
    

    return {
        posts,
    };
})();





        // deleteButton.addEventListener('click', () => {
                //     const index = projectArray.findIndex((post) => post === project);
                //     if (index !== -1) {
                //         projectArray.splice(index, 1);
                //         newPost.remove();
                       

                //         // Remove the post from the "Today" section
                //         const todayPosts = contentDom.posts.Today;
                //         const todayIndex = todayPosts.findIndex((post) => post === project);
                //         if (todayIndex !== -1) {
                //             todayPosts.splice(todayIndex, 1);
                //         }

                //         // Remove the post from the respective category section
                //         const categoryPosts = contentDom.posts[project.category];
                //         const categoryIndex = categoryPosts.findIndex((post) => post === project);
                //         if (categoryIndex !== -1) {
                //             categoryPosts.splice(categoryIndex, 1);
                //         }

                //         // Update the display for "Today" and the respective category section
                        
                //         contentDom.posts.domPoster(contentDom.posts[selection.textContent]);
                //         saveProjectsToLocalStorage();
                //     }
                // });


