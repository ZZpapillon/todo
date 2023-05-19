export const contentDom = (() => {
    const posts = {
        Today: [],
        Projects: [],
        Personal: [],
        Work: [],
        domManipulator: function (project) {
            contentDom.posts.Today.push(project);
            if (project.category === 'Projects') {
                contentDom.posts.Projects.push(project);
            }
            if (project.category === 'Personal') {
                contentDom.posts.Personal.push(project);
            }
            if (project.category === 'Work') {
                contentDom.posts.Work.push(project);
            }
        },

        domPoster: function (project, content, priority) {
            const newPost = document.createElement('div');
            newPost.classList.add('newPost');

            // Find all existing newPost elements
            const existingPosts = content.querySelectorAll('.newPost');

            // Calculate the number of rows to span for the existing posts
            const rowSpan = existingPosts.length + 2;

            // Adjust the grid row span for the existing posts
            existingPosts.forEach((post) => {
                post.style.gridRowEnd = `span ${rowSpan}`;
            });
            
            
            
    

            const category = document.createElement('div')
            category.classList.add('categoryPart')
            category.textContent = project.category

            const title = document.createElement('div')
            title.classList.add('titlePart')
            title.textContent = project.title

            const describtion = document.createElement('div')
            describtion.classList.add('describtionPart')
            describtion.textContent = project.description


            const priorityPart = document.createElement('div');
            priorityPart.classList.add('priorityPart');

            // Create the circle element for the selected priority
            const selectedCircle = document.createElement('span');
            selectedCircle.classList.add('priority-circle');
            selectedCircle.style.backgroundColor = priority; // Set the background color based on the priority
            

           
            priorityPart.appendChild(selectedCircle);


            // Create the checkbox input element
           
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox-input')

            

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('deleteButton')
            deleteButton.textContent = 'X';

            deleteButton.addEventListener('click', () => {
                const index = contentDom.posts.Today.indexOf(project);
                if (index !== -1) {
                    contentDom.posts.Projects.splice(index, 1);
                    newPost.remove();
                }
            });

            newPost.appendChild(deleteButton);
            newPost.appendChild(category)
            newPost.appendChild(title)
            newPost.appendChild(describtion)
            newPost.appendChild(priorityPart)
            newPost.appendChild(checkbox);
            

            content.prepend(newPost);


           
            
            

        },
      
        
    };

    return {
        posts,
    };
})();






