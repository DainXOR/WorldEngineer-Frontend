import { api } from "./requestsApi.js";

import { Optional } from "../../tools/optional";
import { isEmpty } from "../../tools/object.js";

export class AuthApi {
    /** @type {api} */
    static #api
    /** @type {string} */
    static #route

    constructor() {
    }

    /**
     * @param {api} apiObject 
     */
    static init(apiObject){
        AuthApi.#api = apiObject;
        AuthApi.#route = "auth";
    }

    /** Private get method
     * 
     * @param {string} path
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<AuthModel>}
     */
    async #get(path, pathParams = [], queryParams = {}) {
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => !isEmpty(queryParams) ? queryParams : null);

        return AuthApi.#api.get(AuthApi.#route + "/" + path, optionalPathParams, optionalQueryParams);
    }

    /** Private post method
     * 
     * @param {string} path
     * @param {AuthCreate} body
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<AuthModel>}
     */
    async #post(path, body, pathParams = [], queryParams = {}) {
        const optionalBody = Optional.from(() => !isEmpty(queryParams) ? body : null);
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => !isEmpty(queryParams) ? queryParams : null);

        return AuthApi.#api.post(AuthApi.#route + "/" + path, optionalPathParams, optionalQueryParams, optionalBody);
    }

    /** Private put method
     * 
     * @param {string} path
     * @param {AuthUpdate} body
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<AuthModel>}
     */
    async #put(path, body, pathParams = [], queryParams = {}) {
        const optionalBody = Optional.from(() => !isEmpty(queryParams) ? body : null);
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => !isEmpty(queryParams) > 0 ? queryParams : null);

        return AuthApi.#api.put(AuthApi.#route + "/" + path, optionalPathParams, optionalQueryParams, optionalBody);
    }   

    /** Private delete method
     * 
     * @param {string} path
     * @param {string[]} pathParams
     * @param {Object} queryParams
     * 
     * @returns {Promise<AuthModel>}
     */
    async #delete(path, pathParams = [], queryParams = {}) {
        const optionalPathParams = Optional.from(() => pathParams.length > 0 ? pathParams : null);
        const optionalQueryParams = Optional.from(() => !isEmpty(queryParams) ? queryParams : null);

        return AuthApi.#api.delete(AuthApi.#route + "/" + path, optionalPathParams, optionalQueryParams);
    }

    /** Register a new user
     * 
     * @param {string} email
     * 
     * @returns {Promise<Response>}
     * 
     */
    async register(email) {
        return this.#get("register", [email]);
    }

    /** Login a user
     * 
     * @param {string} email
     * 
     * @returns {Promise<Response>}
     * 
     */
    async login(email) {
        return this.#get("login", [email]);
    }

    /** Authenticate a user
     * 
     * @param {string} email
     * @param {string} code
     * 
     * @returns {Promise<Response>}
     * 
     */
    async authenticate(email, code) {
        return this.#get("verify", [email], {"token": code});
    }
}