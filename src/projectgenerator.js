

class ProjectGen {
    constructor(title, describtion, priority, checklist) {
        this.title = title;
        this.describtion = describtion;
        this.priority = priority;
        this.checklist = checklist;
    }
    info = () => {

        return (`title: ${this.title} describtion: ${this.describtion} priority: ${this.priority} checklist: ${this.checklist}`);
    }
}

    let project = new ProjectGen("title", "describtion", "priority", "checklist");

export {ProjectGen, project};