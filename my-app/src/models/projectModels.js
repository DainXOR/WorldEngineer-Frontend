export class ProjectModel {
    /** @type {number} */
    id;
    /** @type {string} */
    name;
    /** @type {string} */
    description;
    /** @type {string} */
    createdAt;
    /** @type {number} */
    idCreator;
    /** @type {number} */
    idStatus;
    /** @type {number} */
    idSettings;

    static of(id, name, description, createdAt, idCreator, idStatus, idSettings) {
        if (typeof(id) !== "number") {
            throw new Error("id is required to be a number");
        }
        if (typeof(name) !== "string") {
            throw new Error("name is required to be a string");
        }
        if (typeof(description) !== "string") {
            throw new Error("description is required to be a string");
        }
        if (typeof(createdAt) !== "string") {
            throw new Error("createdAt is required to be a string");
        }
        if (typeof(idCreator) !== "number") {
            throw new Error("idCreator is required to be a number");
        }
        if (typeof(idStatus) !== "number") {
            throw new Error("idStatus is required to be a number");
        }
        if (typeof(idSettings) !== "number") {
            throw new Error("idSettings is required to be a number");
        }
        
        let project = new ProjectModel();
        project.id = id;
        project.name = name;
        project.description = description;
        project.createdAt = createdAt;
        project.idCreator = idCreator;
        project.idStatus = idStatus;
        project.idSettings = idSettings;

        return project;
    }
}

export class ProjectCreate {
    /** @type {string} */
    name;
    /** @type {string} */
    description;
    /** @type {number} */
    idCreator;
    /** @type {number} */
    idStatus;

    static of(name, description, idCreator, idStatus) {
        if (name === undefined || name === null) {
            throw new Error("name is required");
        }
        if (description === undefined || description === null) {
            throw new Error("description is required");
        }
        if (idCreator === undefined || idCreator === null) {
            throw new Error("idUser is required");
        }
        if (idStatus === undefined || idStatus === null) {
            throw new Error("idStatus is required");
        }
        
        let project = new ProjectCreate();
        project.name = name;
        project.description = description;
        project.idCreator = idCreator;
        project.idStatus = idStatus;
        
        return project;
    }
}

export class ProjectUpdate {
    /** @type {string} */
    name;
    /** @type {string} */
    description;
    /** @type {number} */
    idStatus;

    static of(name, description, idStatus) {
        if (name === undefined || name === null) {
            throw new Error("name is required");
        }
        if (description === undefined || description === null) {
            throw new Error("description is required");
        }
        if (idStatus === undefined || idStatus === null) {
            throw new Error("idStatus is required");
        }
        
        let project = new ProjectUpdate();
        project.name = name;
        project.description = description;
        project.idStatus = idStatus;
        
        return project;
    }
}