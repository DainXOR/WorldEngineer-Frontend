export class ResourceTextModel {
    /** @type {number} */
    id
    /** @type {number} */
    id_project
    /** @type {string} */
    name
    /** @type {number} */
    resource_type
    /** @type {string} */
    data
    /** @type {string} */
    created_at
    /** @type {string} */
    updated_at

    /**	Create a new ResourceTextModel
     * @param {number} id
     * @param {number} idProject
     * @param {string} name
     * @param {number} resourceType
     * @param {string} data
     * @param {string} createdAt
     * @param {string} updatedAt
     * 
     * @returns {ResourceTextModel}
     */
    static of(id, idProject, name, resourceType, data, createdAt, updatedAt) {
        if (typeof(id) !== "number") {
            throw new Error("id is required to be a number");
        }
        if (typeof(idProject) !== "number") {
            throw new Error("idProject is required to be a number");
        }
        if (typeof(name) !== "string") {
            throw new Error("name is required to be a string");
        }
        if (typeof(resourceType) !== "number") {
            throw new Error("resourceType is required to be a string");
        }
        if (typeof(data) !== "string") {
            throw new Error("data is required to be a string");
        }
        if (typeof(createdAt) !== "string") {
            throw new Error("createdAt is required to be a string");
        }
        if (typeof(updatedAt) !== "string") {
            throw new Error("updatedAt is required to be a string");
        }
        
        let resourceText = new ResourceTextModel();
        resourceText.id = id;
        resourceText.id_project = idProject;
        resourceText.name = name;
        resourceText.resource_type = resourceType;
        resourceText.data = data;
        resourceText.created_at = createdAt;
        resourceText.updated_at = updatedAt;

        return resourceText;
    }
    
}

export class ResourceTextCreate {
    /** @type {number} */
    id_project
    /** @type {string} */
    name
    /** @type {number} */
    resource_type
    /** @type {string} */
    data

    /**	Create a new ResourceTextCreate
     * @param {number} idProject
     * @param {string} name
     * @param {number} resourceType
     * @param {string} data
     * 
     * @returns {ResourceTextCreate}
     */
    static of(idProject, name, resourceType, data) {
        if (typeof(idProject) !== "number") {
            throw new Error("idProject is required to be a number");
        }
        if (typeof(name) !== "string") {
            throw new Error("name is required to be a string");
        }
        if (typeof(resourceType) !== "number") {
            throw new Error("resourceType is required to be a number");
        }
        if (typeof(data) !== "string") {
            throw new Error("data is required to be a string");
        }
        
        let resourceText = new ResourceTextCreate();
        resourceText.id_project = idProject;
        resourceText.name = name;
        resourceText.resource_type = resourceType;
        resourceText.data = data;

        return resourceText;
    }
    
}

export class ResourceTextUpdate {
    /** @type {number} */
    id
    /** @type {number} */
    id_project
    /** @type {string} */
    name
    /** @type {number} */
    resource_type
    /** @type {string} */
    data

    /**	Create a new ResourceTextUpdate
     * @param {number} id
     * @param {number} idProject
     * @param {string} name
     * @param {number} resourceType
     * @param {string} data
     * 
     * @returns {ResourceTextUpdate}
     */
    static of(id, idProject, name, resourceType, data) {
        if (typeof(id) !== "number") {
            throw new Error("id is required to be a number");
        }
        if (typeof(idProject) !== "number") {
            throw new Error("idProject is required to be a number");
        }
        if (typeof(name) !== "string") {
            throw new Error("name is required to be a string");
        }
        if (typeof(resourceType) !== "number") {
            throw new Error("resourceType is required to be a number");
        }
        if (typeof(data) !== "string") {
            throw new Error("data is required to be a string");
        }
        
        let resourceText = new ResourceTextUpdate();
        resourceText.id = id;
        resourceText.id_project = idProject;
        resourceText.name = name;
        resourceText.resource_type = resourceType;
        resourceText.data = data;

        return resourceText;
    }
}