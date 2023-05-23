import  { format, addDays } from 'date-fns';


export function createForm(callback) {
    const container = document.querySelector('.container');
    const clickButton = document.querySelector('.newProject');
    const allElements = document.querySelectorAll('*');

    // Disable click events on all elements except the submit button
    allElements.forEach((element) => {
        element.addEventListener('click', handleGlobalClick, true);
    });

    // Close the form and reset when the Esc key is pressed
    document.addEventListener('keydown', handleEscKey);

    function handleGlobalClick(event) {
        if (event.target !== clickButton && !event.target.closest('.form-container')) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    function handleEscKey(event) {
        if (event.key === 'Escape') {
            closeForm();
        }
    }

    function closeForm() {
        formContainer.remove();
        container.classList.remove('blur');
        form.reset();

        // Re-enable click events on all elements
        allElements.forEach((element) => {
            element.removeEventListener('click', handleGlobalClick, true);
        });

        // Remove the Esc key event listener
        document.removeEventListener('keydown', handleEscKey);
    }

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
    selectInput.id = 'categoryInput'; // Unique ID
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
    titleInput.id = 'titleInput'; // Unique ID
    titleLabel.appendChild(titleInput);

    // Create the input for due date
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate';
    dueDateInput.id = 'dueDateInput'; // Unique ID
    dueDateLabel.appendChild(dueDateInput);

    // Create the input for description
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.name = 'description';
    descriptionInput.id = 'descriptionInput'; // Unique ID
    descriptionLabel.appendChild(descriptionInput);
    

    
    
    
    
    
    
    // Create the input for priority
    const priorityLabel = document.createElement('label');
    priorityLabel.id = 'priorityLabel'
    priorityLabel.textContent = 'Priority:';

    const priorityDiv = document.createElement('div');
    priorityDiv.style.marginTop = '15px';

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
    form.appendChild(dueDateLabel);
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

        if (titleInput.value === '' || dueDateInput.value === '' || getSelectedPriority() === '') {
            // Display error message or highlight the unfilled inputs
            // Example: Showing an alert message
            alert('Please fill in all the required fields');
            return;
        }

        // Check if title exceeds 30 characters
        if (titleInput.value.length > 38) {
            // Display error message or prevent submission
            // Example: Showing an alert message
            alert('Title should not exceed 38 characters');
            return;
        }
        
        const dueDateValue = new Date(dueDateInput.value);
        const currentDate = new Date();
        const formattedDueDate = format(dueDateValue, 'MMMM d, yyyy');
        const daysDifference = Math.ceil((dueDateValue - currentDate) / (1000 * 60 * 60 * 24));
        
        if (dueDateValue < currentDate) {
            // Display error message or prevent submission
            // Example: Showing an alert message
            alert('Selected due date must not be in the past!');
            return;
        }
        // Retrieve form values
        const category = selectInput.value;
        const title = titleInput.value;
        const dueDate = `${daysDifference} Days Away (${formattedDueDate})`
        const description = descriptionInput.value
        const priority = getSelectedPriority();

        callback(category, title, dueDate, description, priority);

        allElements.forEach((element) => {
            element.removeEventListener('click', handleGlobalClick, true);
        });

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
        circle.id = color + 'Circle'; // Unique ID
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
