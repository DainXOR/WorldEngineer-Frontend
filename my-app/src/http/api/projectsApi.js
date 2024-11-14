import { UserFilter } from "../../models/filterModel.js";
import { ProjectModel, ProjectCreate, ProjectUpdate } from "../../models/projectModels.js";
import { isEmpty } from "../../tools/object.js";
import { Optional } from "../../tools/optional.js";
import { api } from "./requestsApi.js";

export class ProjectsApi{
    /** @type {api} */
    static #api
    /** @type {string} */
    static #route

    static CollaboratorsApi = class {
        /** @type {string} */
        static #route
    
        static init(){
            CollaboratorsApi.#route = "collaborator";
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
            const reqPath = ProjectsApi.#route + "/" + path;
    
            return ProjectsApi.#get(reqPath, pathParams, queryParams);
        }
    }
    

    constructor() {
    }

    /**
    * @param {api} api 
    */
    static init(apiObject){
        ProjectsApi.#api = apiObject;
        ProjectsApi.#route = "project";

        CollaboratorsApi.init();
    }

    /** Private get method
     * 
     * @param {string} path
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<ProjectModel>}
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
     * @returns {Promise<ProjectModel>}
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
     * @returns {Promise<ProjectModel>}
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
     * @returns {Promise<ProjectModel>}
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
        return ProjectsApi.#post("create", project);
    }
    
    /** Update a project
     * 
     * @param {string} id
     * @param {ProjectUpdate} project 
     * @returns {Promise<ProjectModel>} Json body -> ProjectModel
     */
    static async updateById(id, project) {
        return ProjectsApi.#put("update", project, [id]);
    }

    /** Delete a project
     * 
     * @param {string} id 
     * @returns {Promise<ProjectModel>} Json body -> ProjectModel
     */
    static async delete(id) {
        return ProjectsApi.#delete("delete", [id]);
    }

    
}

