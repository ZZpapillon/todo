export function createForm(callback) {
    const container = document.querySelector('.container');
    const clickButton = document.querySelector('.newProject');

    
        // Clear existing content
        container.classList.add('blur');

        // Create the form container
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        formContainer.style.display = 'block';

        // Create the form element
        const form = document.createElement('form');
        form.classList.add('form');

        // Create the select input for category
        const selectLabel = document.createElement('label');
        selectLabel.textContent = 'Category:';
        const selectInput = document.createElement('select');
        selectInput.name = 'category';
        const categories = ['Projects', 'Personal', 'Work'];
        categories.forEach((category) => {
            const option = document.createElement('option');
            option.textContent = category;
            selectInput.appendChild(option);
        });
        selectLabel.appendChild(selectInput);

        // Create the input for title
        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title:';
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.name = 'title';
        titleLabel.appendChild(titleInput);

        // Create the input for description
        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'Description:';
        const descriptionInput = document.createElement('textarea');
        descriptionInput.name = 'description';
        descriptionLabel.appendChild(descriptionInput);

        // Create the input for priority
        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority:';

        const priorityDiv = document.createElement('div');

        const grayCircle = createPriorityCircle('gray');
        const blueCircle = createPriorityCircle('blue');
        const redCircle = createPriorityCircle('red');

        priorityDiv.appendChild(grayCircle);
        priorityDiv.appendChild(blueCircle);
        priorityDiv.appendChild(redCircle);

        priorityLabel.appendChild(priorityDiv);

        // Create the submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';

        // Append all the form elements to the form
        form.appendChild(selectLabel);
        form.appendChild(titleLabel);
        form.appendChild(descriptionLabel);
        form.appendChild(priorityLabel);
        form.appendChild(submitButton);

        // Append the form to the form container
        formContainer.appendChild(form);

        // Append the form container to the container
        container.appendChild(formContainer);

        // Scroll to the form container
        container.scrollTo({
            top: formContainer.offsetTop,
            behavior: 'smooth',
        });

        // Handle form submission
        const handleSubmit = (event) => {
            event.preventDefault();

            // Retrieve form values
            const category = selectInput.value;
            const title = titleInput.value;
            const description = descriptionInput.value;
            const priority = getSelectedPriority();

            callback(category, title, description, priority);

            formContainer.remove();
            container.classList.remove('blur');
            form.reset();
        };

        form.addEventListener('submit', handleSubmit);

        // Helper function to create a priority circle
        function createPriorityCircle(color) {
            const circle = document.createElement('span');
            circle.classList.add('priority-circle');
            circle.classList.add(color);
            circle.addEventListener('click', () => {
                grayCircle.classList.remove('selected');
                blueCircle.classList.remove('selected');
                redCircle.classList.remove('selected');
                circle.classList.add('selected');
            });
            return circle;
        }

        // Helper function to get the selected priority
        function getSelectedPriority() {
            if (grayCircle.classList.contains('selected')) {
                return 'gray';
            } else if (blueCircle.classList.contains('selected')) {
                return 'blue';
            } else if (redCircle.classList.contains('selected')) {
                return 'red';
            }
            return '';
        }
    
}
