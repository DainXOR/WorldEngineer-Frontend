import { api } from "./requests.js";

export class users{
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
     * @param {[]} pathParams
     * @returns {Promise<{}>}
     */
    async #get(path, pathParams = []) {
        return this.#api.get(this.#route + path, pathParams, {});
    }
    /** Private post method
     * 
     * @param {string} path
     * @param {[]} pathParams
     * @param {object} body
     * @returns {Promise<{}>}
     */
    async #post(path, pathParams = [], body = {}) {
        return this.#api.post(this.#route + path, pathParams, {}, body);
    }

    /** Get a user by ID
     * 
     * @param {string} id 
     * @returns {Promise<{}>}
     */
    async getByID(id) {
        return this.#get("id/", [id]);
    }
    async getByStatusID(id) {
        return this.#get("id-status/", [id]);
    }
    async getAll() {
        return this.#get("all/");
    }

}