import { UserCreate, UserModel, UserUpdate } from "../../models/userModels.js";
import { Optional } from "../../tools/optional.js";
import { api } from "./requestsApi.js";

export class UsersApi{
    #api
    #route
    /** 
     * @param {api} api 
    */
    constructor(api){
        this.#api = api;
        this.#route = "user/";
    }

    /** Private get method
     * 
     * @param {string} path
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<UserModel>}
     */
    async #get(path, pathParams = [], queryParams = {}) {
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => queryParams.length > 0 ? queryParams : null);

        return this.#api.get(this.#route + path, optionalPathParams, optionalQueryParams);
    }
    /** Private post method
     * 
     * @param {string} path
     * @param {UserCreate} body
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<UserModel>}
     */
    async #post(path, body, pathParams = [], queryParams = {}) {
        const optionalBody = Optional.from(() => body.length ? body : null);
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => queryParams.length > 0 ? queryParams : null);

        return this.#api.post(this.#route + path, optionalPathParams, optionalQueryParams, optionalBody);
    }
    /** Private put method
     * 
     * @param {string} path
     * @param {UserUpdate} body
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<UserModel>}
     */
    async #put(path, body, pathParams = [], queryParams = {}) {
        const optionalBody = Optional.from(() => body.length ? body : null);
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => queryParams.length > 0 ? queryParams : null);

        return this.#api.put(this.#route + path, optionalPathParams, optionalQueryParams, optionalBody);
    }
    /** Private delete method
     * 
     * @param {string} path
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<UserModel>}
     */
    async #delete(path, pathParams = [], queryParams = {}) {
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => queryParams.length > 0 ? queryParams : null);

        return this.#api.delete(this.#route + path, optionalPathParams, optionalQueryParams);
    }

    /** Get a user by ID
     * 
     * @param {string} id 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async getByID(id) {
        const response = await this.#get("id/", [id]);
            
        return response;
    }
    /** Get a user by status ID
     * 
     * @param {string} id 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async getByStatusID(id) {
        const response = await this.#get("id-status/", [id]);

        return response;
    }
    /** Get all users
     * @param {Object} queryParams 
     * 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async getAll(queryParams) {
        const response = await this.#get("");

        return response;
    }

    /** Create a new user
     * 
     * @param {UserCreate} user 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async create(user) {
        const response = await this.#post("", user);

        return response;
    }

    /** Update a user
     * 
     * @param {UserUpdate} user 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async updateById(id, user) {
        const response = await this.#put("id/", user, [id]);

        return response;
    }

    /** Delete a user by ID
     * 
     * @param {string} id 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async deleteByID(id) {
        const response = await this.#delete("id/", [id]);

        return response;
    }
    /** Delete a user by status ID
     * 
     * @param {string} id 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async deleteByStatusID(id) {
        const response = await this.#delete("id-status/", [id]);

        return response;
    }
    async deleteAll() {
        const response = await this.#delete("");

        return response;
    }
    
}