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
            }
            if (project.category === 'Personal') {
                posts.Personal.push(project);
            }
            if (project.category === 'Work') {
                posts.Work.push(project);
            }
        },

        domPoster: function (projectArray) {
            const content = document.querySelector('.content'); // Get the content element
            const existingPosts = content.querySelectorAll('.newPost');

            // const rowSpan = existingPosts.length + 5;

            // existingPosts.forEach((post) => {
            //     post.style.gridRowEnd = `span ${rowSpan}`;
            // });

            // Clear the existingPosts before appending new posts
            existingPosts.forEach((post) => {
                post.remove();
            });
            // const existingPosts = content.querySelectorAll('.newPost');
            // if (!existingPosts || existingPosts.length === 0) {
            //     return; // Exit the function if no "newPost" elements are found
            // }
            // const rowSpan = existingPosts.length + 2;

            

            // existingPosts.forEach((post) => {
            //     post.style.gridRowEnd = `span ${rowSpan}`;
            // });

            projectArray.forEach((project) => {
                const newPost = document.createElement('div');
                newPost.classList.add('newPost');
                

                const category = document.createElement('div');
                category.classList.add('categoryPart');
                category.textContent = project.category;

                const title = document.createElement('div');
                title.classList.add('titlePart');
                title.textContent = project.title;

                const describtion = document.createElement('div');
                describtion.classList.add('describtionPart');
                describtion.textContent = project.description;

                const priorityPart = document.createElement('div');
                priorityPart.classList.add('priorityPart');

                const selectedCircle = document.createElement('span');
                selectedCircle.classList.add('priority-circle');
                selectedCircle.style.backgroundColor = project.priority;

                priorityPart.appendChild(selectedCircle);

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('checkbox-input');

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('deleteButton');
                deleteButton.textContent = 'X';
                deleteButton.addEventListener('click', () => {
                    const index = projectArray.findIndex((post) => post === project);
                    if (index !== -1) {
                        projectArray.splice(index, 1);
                        newPost.remove();

                        // Remove the post from the "Today" section
                        const todayPosts = contentDom.posts.Today;
                        const todayIndex = todayPosts.findIndex((post) => post === project);
                        if (todayIndex !== -1) {
                            todayPosts.splice(todayIndex, 1);
                        }

                        // Remove the post from the respective selection
                        const selectionText = selection.textContent.replace(':', '');
                        const selectionPosts = contentDom.posts[selectionText];
                        const selectionIndex = selectionPosts.findIndex((post) => post === project);
                        if (selectionIndex !== -1) {
                            selectionPosts.splice(selectionIndex, 1);
                        }

                        // Update the display for "Today" and the respective selection
                        contentDom.posts.domPoster(contentDom.posts.Today);
                        contentDom.posts.domPoster(selectionPosts);
                    }
                });




                newPost.appendChild(deleteButton);
                newPost.appendChild(category);
                newPost.appendChild(title);
                newPost.appendChild(describtion);
                newPost.appendChild(priorityPart);
                newPost.appendChild(checkbox);

                content.prepend(newPost);
            });
        },
    };

    return {
        posts,
    };
})();







