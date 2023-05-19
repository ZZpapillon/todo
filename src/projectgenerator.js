

class ProjectGen {
    constructor(category, title, description, priority) {
        this.category = category;
        this.title = title;
        this.description = description;
        this.priority = priority;
    }

    info() {
        return `Category: ${this.category}, Title: ${this.title}, Description: ${this.description}, Priority: ${this.priority}`;
    }
}

export { ProjectGen };
