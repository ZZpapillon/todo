

class ProjectGen {
    constructor(category, title, dueDate, description, priority, checked) {
        this.category = category;
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.checked = checked;
    }

    info() {
        return `Category: ${this.category}, Title: ${this.title}, Date: ${this.dueDate} Description: ${this.description}, Priority: ${this.priority}, Checked: ${this.checked}`;
    }
}

export { ProjectGen };
