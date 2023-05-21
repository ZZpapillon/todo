

class ProjectGen {
    constructor(category, title, dueDate, description, priority) {
        this.category = category;
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    }

    info() {
        return `Category: ${this.category}, Title: ${this.title}, Date: ${this.dueDate} Description: ${this.description}, Priority: ${this.priority}`;
    }
}

export { ProjectGen };
