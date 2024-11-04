import { UserFilter } from "../../models/filterModel.js";
import { UserCreate, UserModel, UserUpdate } from "../../models/userModels.js";
import { Optional } from "../../tools/optional.js";
import { api } from "./requestsApi.js";

export class UtilsApi{
    static #api
    static #route

    constructor() {
    }

    /**
    * @param {api} api 
    */
    static init(apiObject){
        UtilsApi.#api = apiObject;
        UtilsApi.#route = "util";
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
        const optionalQueryParams = Optional.from(() => queryParams.length > 0 ? queryParams : null);

        return UtilsApi.#api.get(UtilsApi.#route + "/" + path, optionalPathParams, optionalQueryParams);
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
        const optionalBody = Optional.from(() => body.length ? body : null);
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => queryParams.length > 0 ? queryParams : null);

        return UtilsApi.#api.post(UtilsApi.#route + "/" + path, optionalPathParams, optionalQueryParams, optionalBody);
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
        const optionalBody = Optional.from(() => body.length ? body : null);
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => queryParams.length > 0 ? queryParams : null);

        return UtilsApi.#api.put(UtilsApi.#route + "/" + path, optionalPathParams, optionalQueryParams, optionalBody);
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
        const optionalQueryParams = Optional.from(() => queryParams.length > 0 ? queryParams : null);

        return UtilsApi.#api.delete(UtilsApi.#route + "/" + path, optionalPathParams, optionalQueryParams);
    }


    /** Get a new username
     * 
     * @returns {Promise<string>}
     */
    static async createUsername(){
        return UtilsApi.#get("username/create");
    }
    static async checkUsername(username){
        return UtilsApi.#get("username/check", [username]);
    }

    /** Get a new name tag
     * 
     * @param {string} username
     * 
     * @returns {Promise<string>}
     */
    static async createNameTag(username){
        return UtilsApi.#get("name-tag/create", [username]);
    }
    /** Check if a name tag is available
     * 
     * @param {string} nameTag
     * 
     * @returns {Promise<boolean>}
     */
    static async checkNameTag(nameTag){
        return UtilsApi.#get("name-tag/check", [nameTag]);
    }
}