import { UserFilter } from "../../models/filterModel.js";
import { ProjectModel, ProjectCreate, ProjectUpdate } from "../../models/projectModels.js";
import { ResourceTextModel, ResourceTextUpdate } from "../../models/ResourceModels.js";
import { isEmpty } from "../../tools/object.js";
import { Optional } from "../../tools/optional.js";
import { api } from "./requestsApi.js";

export class ProjectsApi{
    /** @type {api} */
    static #api
    /** @type {string} */
    static #route

    static Collaborators = class CollaboratorsApi {
        /** @type {string} */
        static #route
        /** @type {(path, pathParams = [], queryParams = {}) => Promise<Object>} */
        static #apiGet
        /** @type {(path, body, pathParams = [], queryParams = {}) => Promise<Object>} */
        static #apiPost
        /** @type {(path, body, pathParams = [], queryParams = {}) => Promise<Object>} */
        static #apiPut
        /** @type {(path, pathParams = [], queryParams = {}) => Promise<Object>} */
        static #apiDelete
    
        /**
         * 
         * @param {(path, pathParams = [], queryParams = {}) => Promise<Object>} delegatedGet 
         * @param {(path, body, pathParams = [], queryParams = {}) => Promise<Object>} delegatedPost 
         * @param {(path, body, pathParams = [], queryParams = {}) => Promise<Object>} delegatedPut 
         * @param {(path, pathParams = [], queryParams = {}) => Promise<Object>} delegatedDelete 
         */
        static init(delegatedGet, delegatedPost, delegatedPut, delegatedDelete) {
            CollaboratorsApi.#apiGet = delegatedGet;
            CollaboratorsApi.#apiPost = delegatedPost;
            CollaboratorsApi.#apiPut = delegatedPut;
            CollaboratorsApi.#apiDelete = delegatedDelete;
    
            CollaboratorsApi.#route = "collaborators";
        }
    
        /** Private get method
         * 
         * @param {string} path
         * @param {string[]} pathParams
         * @param {Object} queryParams
         * 
         * @returns {Promise<CollaboratorModel>}
         * @private
         */
        static async #get(path, pathParams = [], queryParams = {}) {
            const reqPath = CollaboratorsApi.#route + "/" + path;
    
            return CollaboratorsApi.#apiGet(reqPath, pathParams, queryParams);
        }
    
        /** Private post method
         * 
         * @param {string} path
         * @param {CollaboratorModel} body
         * @param {string[]} pathParams
         * @param {Object} queryParams
         * 
         * @returns {Promise<CollaboratorModel>}
         * @private
         */
        static async #post(path, body, pathParams = [], queryParams = {}) {
            const reqPath = CollaboratorsApi.#route + "/" + path;
    
            return CollaboratorsApi.#apiPost(reqPath, body, pathParams, queryParams);
        }
    
        /** Private put method
         * 
         * @param {string} path
         * @param {CollaboratorModel} body
         * @param {string[]} pathParams
         * @param {Object} queryParams
         * 
         * @returns {Promise<CollaboratorModel>}
         * @private
         */
        static async #put(path, body, pathParams = [], queryParams = {}) {
            const reqPath = CollaboratorsApi.#route + "/" + path;
    
            return CollaboratorsApi.#apiPut(reqPath, body, pathParams, queryParams);
        }
    
        /** Private delete method
         * 
         * @param {string} path
         * @param {string[]} pathParams
         * @param {Object} queryParams
         * 
         * @returns {Promise<CollaboratorModel>}
         * @private
         */
        static async #delete(path, pathParams = [], queryParams = {}) {
            const reqPath = CollaboratorsApi.#route + "/" + path;
    
            return CollaboratorsApi.#apiDelete(reqPath, pathParams, queryParams);
        }

        /** Get collaborator by ID
         * 
         * @param {string} id
         * @returns {Promise<CollaboratorModel>}
         */
        static async getByID(id) {
            return CollaboratorsApi.#get("id", [id]);
        }
    }
    static Resources = class ResourcesApi {
        /** @type {string} */
        static #route
        /** @type {(path, pathParams = [], queryParams = {}) => Promise<Object>} */
        static #apiGet
        /** @type {(path, body, pathParams = [], queryParams = {}) => Promise<Object>} */
        static #apiPost
        /** @type {(path, body, pathParams = [], queryParams = {}) => Promise<Object>} */
        static #apiPut
        /** @type {(path, pathParams = [], queryParams = {}) => Promise<Object>} */
        static #apiDelete
    
        /**
         * 
         * @param {(path, pathParams = [], queryParams = {}) => Promise<Object>} delegatedGet 
         * @param {(path, body, pathParams = [], queryParams = {}) => Promise<Object>} delegatedPost 
         * @param {(path, body, pathParams = [], queryParams = {}) => Promise<Object>} delegatedPut 
         * @param {(path, pathParams = [], queryParams = {}) => Promise<Object>} delegatedDelete 
         */
        static init(delegatedGet, delegatedPost, delegatedPut, delegatedDelete) {
            ResourcesApi.#apiGet = delegatedGet;
            ResourcesApi.#apiPost = delegatedPost;
            ResourcesApi.#apiPut = delegatedPut;
            ResourcesApi.#apiDelete = delegatedDelete;
    
            ResourcesApi.#route = "resources";
        }
    
        /** Private get method
         * 
         * @param {string} path
         * @param {string[]} pathParams
         * @param {Object} queryParams
         * 
         * @returns {Promise<CollaboratorModel>}
         * @private
         */
        static async #get(path, pathParams = [], queryParams = {}) {
            const reqPath = ResourcesApi.#route + "/" + path;
    
            return ResourcesApi.#apiGet(reqPath, pathParams, queryParams);
        }
    
        /** Private post method
         * 
         * @param {string} path
         * @param {CollaboratorModel} body
         * @param {string[]} pathParams
         * @param {Object} queryParams
         * 
         * @returns {Promise<CollaboratorModel>}
         * @private
         */
        static async #post(path, body, pathParams = [], queryParams = {}) {
            const reqPath = ResourcesApi.#route + "/" + path;
    
            return ResourcesApi.#apiPost(reqPath, body, pathParams, queryParams);
        }
    
        /** Private put method
         * 
         * @param {string} path
         * @param {CollaboratorModel} body
         * @param {string[]} pathParams
         * @param {Object} queryParams
         * 
         * @returns {Promise<CollaboratorModel>}
         * @private
         */
        static async #put(path, body, pathParams = [], queryParams = {}) {
            const reqPath = ResourcesApi.#route + "/" + path;
    
            return ResourcesApi.#apiPut(reqPath, body, pathParams, queryParams);
        }
    
        /** Private delete method
         * 
         * @param {string} path
         * @param {string[]} pathParams
         * @param {Object} queryParams
         * 
         * @returns {Promise<CollaboratorModel>}
         * @private
         */
        static async #delete(path, pathParams = [], queryParams = {}) {
            const reqPath = ResourcesApi.#route + "/" + path;
    
            return ResourcesApi.#apiDelete(reqPath, pathParams, queryParams);
        }

        /** Create a new text resource
         * 
         * @param {ResourceTextModel} resource
         * @returns {Promise<ResourceTextModel>}
         */
        static async createText(resource) {
            return ResourcesApi.#post("", resource);
        }

        /** Get text resource by ID
         * 
         * @param {string} id
         * @returns {Promise<ResourceTextModel>}
         */
        static async getTextByID(id) {
            let res = await ResourcesApi.#get("id", [id]);

            if (!res.ok) {
                return res;
            }

            let data = await res.json();
            return {response: res, resource: data[0]};
        }

        /** Get text resources by project ID
         * 
         * @param {string} id
         * @returns {Promise<Response>} Json body -> []ResourceTextModel
         */
        static async getTextByProjectID(id) {
            let res = await ResourcesApi.#get("id-project", [id]);

            if (!res.ok) {
                return res;
            }

            let data = await res.json();
            return {response: res, resource: data[0]};
        }

        /** Update text resource by ID
         * 
         * @param {string} id
         * @param {ResourceTextUpdate} resource
         * @returns {Promise<ResourceTextModel>}
         */
        static async updateTextByID(id, resource) {
            return ResourcesApi.#put("id", resource, [id]);
        }
    }

    /**
    * @param {api} api 
    */
    static init(apiObject){
        ProjectsApi.#api = apiObject;
        ProjectsApi.#route = "project";

        ProjectsApi.Collaborators.init(
            ProjectsApi.#get,
            ProjectsApi.#post,
            ProjectsApi.#put,
            ProjectsApi.#delete,
        );
        ProjectsApi.Resources.init(
            ProjectsApi.#get,
            ProjectsApi.#post,
            ProjectsApi.#put,
            ProjectsApi.#delete,
        );
    }

    /** Private get method
     * 
     * @param {string} path
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<Object>}
     */
    static async #get(path, pathParams = [], queryParams = {}) {
        const optionalPathParams = api.toOptionalPathParams(pathParams);
        const optionalQueryParams = api.toOptionalQueryParams(queryParams);
        const reqPath = ProjectsApi.#route + "/" + path;

        return ProjectsApi.#api.get(reqPath, optionalPathParams, optionalQueryParams);
    }
    /** Private post method
     * 
     * @param {string} path
     * @param {ProjectCreate} body
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<Object>}
     */
    static async #post(path, body, pathParams = [], queryParams = {}) {
        const optionalBody = api.toOptionalBody(body);
        const optionalPathParams = api.toOptionalPathParams(pathParams);
        const optionalQueryParams = api.toOptionalQueryParams(queryParams);
        const reqPath = ProjectsApi.#route + "/" + path;

        return ProjectsApi.#api.post(reqPath, optionalPathParams, optionalQueryParams, optionalBody);
    }
    /** Private put method
     * 
     * @param {string} path
     * @param {ProjectUpdate} body
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<Object>}
     */
    static async #put(path, body, pathParams = [], queryParams = {}) {
        const optionalBody = api.toOptionalBody(body);
        const optionalPathParams = api.toOptionalPathParams(pathParams);
        const optionalQueryParams = api.toOptionalQueryParams(queryParams);
        const reqPath = ProjectsApi.#route + "/" + path;

        return ProjectsApi.#api.put(reqPath, optionalPathParams, optionalQueryParams, optionalBody);
    }
    /** Private delete method 
     * 
     * @param {string} path
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<Object>}
     */
    static async #delete(path, pathParams = [], queryParams = {}) {
        const optionalPathParams = api.toOptionalPathParams(pathParams);
        const optionalQueryParams = api.toOptionalQueryParams(queryParams);
        const reqPath = ProjectsApi.#route + "/" + path;

        return ProjectsApi.#api.delete(reqPath, optionalPathParams, optionalQueryParams);
    }



    /** Get project by ID
     * 
     * @param {string} id 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    static async getByID(id) {
        return ProjectsApi.#get("id", [id]);
    }

    /** Get projects by creator ID
     * @param {string} id
     * @returns {Promise<Response>} Json body -> []UserModel
     */
    static async getByCreatorID(id) {
        return ProjectsApi.#get("id-creator", [id]);
    }

    /** Create a project
     * 
     * @param {ProjectCreate} project 
     * @returns {Promise<ProjectModel>} Json body -> ProjectModel
     */
    static async create(project) {
        return ProjectsApi.#post("", project);
    }
    
    /** Update a project
     * 
     * @param {string} id
     * @param {ProjectUpdate} project 
     * @returns {Promise<ProjectModel>} Json body -> ProjectModel
     */
    static async updateById(id, project) {
        return ProjectsApi.#put("", project, [id]);
    }

    /** Delete a project
     * 
     * @param {string} id 
     * @returns {Promise<ProjectModel>} Json body -> ProjectModel
     */
    static async delete(id) {
        return ProjectsApi.#delete("", [id]);
    }

}

