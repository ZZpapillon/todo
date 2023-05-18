export function createForm() {
    const container = document.querySelector('.container');
    const content = document.querySelector('.content');
    const clickButton = document.querySelector('.newProject')

    clickButton.addEventListener('click', () => {
        // Clear existing content
        
       
        container.classList.add('blur')
        // Create the form container
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        formContainer.style.display = 'block';
        // Create the form element
        const form = document.createElement('form');
        form.classList.add('form')

        // Create the select input for category
        const selectLabel = document.createElement('label');
        selectLabel.textContent = 'Category:';
        const selectInput = document.createElement('select');
        selectInput.name = 'category';
        const categories = ['Projects', 'Personal', 'Work'];
        categories.forEach((category) => {
            const option = document.createElement('option');
            option.value = category.toLowerCase();
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
        // Create the select input for priority
        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority:';
        const prioritySelect = document.createElement('select');
        prioritySelect.name = 'priority';

        // Create the options for priority colors
        const priorityOptions = [
            { value: 'gray', color: '#999' },
            { value: 'blue', color: '#00f' },
            { value: 'red', color: '#f00' },
        ];

        priorityOptions.forEach((option) => {
            const priorityOption = document.createElement('option');
            priorityOption.value = option.value;

            // Create a colored circle for each option
            const circle = document.createElement('span');
            circle.classList.add('priority-circle');
            circle.style.backgroundColor = option.color;

            // Append the circle to the option
            priorityOption.appendChild(circle);

            // Append the option to the select element
            prioritySelect.appendChild(priorityOption);
        });

        priorityLabel.appendChild(prioritySelect);



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

        // Append the form container to the content
        document.body.appendChild(formContainer);

        // Scroll to the form container
        container.scrollTo({
            top: formContainer.offsetTop,
            behavior: 'smooth',
        });
       


        // Handle form submission
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Retrieve form values
            const category = selectInput.value;
            const title = titleInput.value;
            const description = descriptionInput.value;
            const priority = priorityInput.value;

            // Log the form values
            console.log('Category:', category);
            console.log('Title:', title);
            console.log('Description:', description);
            console.log('Priority:', priority);

            // Clear form inputs
            selectInput.value = categories[0].toLowerCase();
            titleInput.value = '';
            descriptionInput.value = '';
            priorityInput.value = '';
            
           
        });
    });
}