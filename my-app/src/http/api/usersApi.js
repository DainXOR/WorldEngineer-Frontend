import { UserFilter } from "../../models/filterModel.js";
import { UserCreate, UserModel, UserUpdate } from "../../models/userModels.js";
import { isEmpty } from "../../tools/object.js";
import { Optional } from "../../tools/optional.js";
import { api } from "./requestsApi.js";

export class UsersApi{
    static #api
    static #route

    constructor() {
    }

    /**
    * @param {api} api 
    */
    static init(apiObject){
        UsersApi.#api = apiObject;
        UsersApi.#route = "user";
    }

    /** Private get method
     * 
     * @param {string} path
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<UserModel>}
     */
    static async #get(path, pathParams = [], queryParams = {}) {
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => !isEmpty(queryParams) > 0 ? queryParams : null);

        return UsersApi.#api.get(UsersApi.#route + "/" + path, optionalPathParams, optionalQueryParams);
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
    static async #post(path, body, pathParams = [], queryParams = {}) {
        const optionalBody = Optional.from(() => !isEmpty(body) ? body : null);
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => !isEmpty(queryParams) ? queryParams : null);

        return UsersApi.#api.post(UsersApi.#route + "/" + path, optionalPathParams, optionalQueryParams, optionalBody);
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
    static async #put(path, body, pathParams = [], queryParams = {}) {
        const optionalBody = Optional.from(() => !isEmpty(body) ? body : null);
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => !isEmpty(queryParams) ? queryParams : null);

        return UsersApi.#api.put(UsersApi.#route + "/" + path, optionalPathParams, optionalQueryParams, optionalBody);
    }
    /** Private delete method
     * 
     * @param {string} path
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<UserModel>}
     */
    static async #delete(path, pathParams = [], queryParams = {}) {
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => !isEmpty(queryParams) ? queryParams : null);

        return UsersApi.#api.delete(UsersApi.#route + "/" + path, optionalPathParams, optionalQueryParams);
    }

    /** Get a user by ID
     * 
     * @param {string} id 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    static async getByID(id) {
        return UsersApi.#get("id", [id]);
    }
    /** Get a user by status ID
     * 
     * @param {string} id 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async getByStatusID(id) {
        const response = await UsersApi.#get("id-status", [id]);

        return response;
    }
    /** Get all users
     * @param {UserFilter} queryParams 
     * 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async getAll(queryParams) {
        const response = await UsersApi.#get("", [], queryParams);

        return response;
    }

    /** Create a new user
     * 
     * @param {UserCreate} user 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async create(user) {
        const response = await UsersApi.#post("", user);

        return response;
    }

    /** Update a user
     * 
     * @param {UserUpdate} user 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async updateById(id, user) {
        const response = await UsersApi.#put("id", user, [id]);

        return response;
    }
    /** Update a user by status ID
     * 
     * @param {string} id 
     * @param {UserUpdate} user 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async updateByStatusID(id, user) {
        const response = await UsersApi.#put("id-status", user, [id]);

        return response;
    }
    /** Update all users
     * @param {UserFilter} queryParams 
     * 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async updateAll(user, queryParams) {
        const response = await UsersApi.#put("", user, [], queryParams);

        return response;
    }

    /** Delete a user by ID
     * 
     * @param {string} id 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async deleteByID(id) {
        const response = await UsersApi.#delete("id", [id]);

        return response;
    }
    /** Delete a user by status ID
     * 
     * @param {string} id 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async deleteByStatusID(id) {
        const response = await UsersApi.#delete("id-status", [id]);

        return response;
    }
    /** Delete all users
     * @param {UserFilter} queryParams 
     * 
     * @returns {Promise<Response>} Json body -> UserModel
     */
    async deleteAll(queryParams) {
        const response = await UsersApi.#delete("", [], queryParams);

        return response;
    }
    
}