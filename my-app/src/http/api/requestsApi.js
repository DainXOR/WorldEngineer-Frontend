import { Optional } from "../../tools/optional"

export class api {
    #baseUrl
    #localUrl
    #apiUrl
    #url
    #connectionStatus

    constructor(url, fallbackUrl, apiRoute = "api/v0/") {
        this.#baseUrl = url
        this.#localUrl = fallbackUrl
        this.#apiUrl = apiRoute
        this.#url
        this.#connectionStatus
    }

    /** Check if the API is reachable
     * 
     * @param {string} url 
     * @returns {Promise<boolean>}
     */
    async checkUrl(url) {
      try {
          const response = await fetch(url);
          return response.ok;
      } catch (error) {
          return false;
      }
    }

    /** Check if the API is reachable
     * 
     * @returns {Promise<boolean>}
     */
    async connect() {
        this.#connectionStatus = true;
        if (await this.checkUrl(this.#baseUrl)) {
            this.#url = this.#baseUrl + this.#apiUrl;
            return true;
        }
        else if (await this.checkUrl(this.#localUrl)) {
            this.#url = this.#localUrl + this.#apiUrl;
            return true;
        }
        else {
            this.#connectionStatus = false;
            return false;
        }
    }

    /** Check connection status
     * 
     * @returns {Promise<boolean>}
     */
    async checkConnection() {
        return await this.checkUrl(this.#url);
    }

    /** Makes a request to the API
     * 
     * @param {string} method
     * @param {string} path 
     * @param {Optional} pathParams Use Optional to wrap string[]
     * @param {Optional} queryParams Use Optional to wrap Object
     * @param {Optional} body Use Optional to wrap Object
     * @returns {Promise<Response>}
     */
    async request(method, path, pathParams, queryParams, body) {
        let requestJson = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (method !== 'GET') {
            requestJson.body = JSON.stringify(body.getOrDefault({}));
        }

        const response = await fetch(
            this.#url + path + 
            pathParams.transformOrDefault(arr => arr.join('/'), '') +
            queryParams.transformOrDefault(d => d.length > 0 ? "/?" + Object.keys(d).map(k => k + '=' + d[k]).join('&') : '', ''), 
            requestJson
        );

        return response;
    }

    /** Get a resource
     * 
     * @param {string} path 
     * @param {Optional} pathParams Use Optional to wrap string[]
     * @param {Optional} queryParamsDict Use Optional to wrap Object
     * @returns {Promise<Response>}
     */
    async get(path, pathParams = Optional.empty(), queryParamsDict = Optional.empty()) {
        return this.request('GET', path, pathParams, queryParamsDict, Optional.empty());
    }

    /** Create a new resource
     * 
     * @param {string} path 
     * @param {Optional} pathParams Use Optional to wrap string[]
     * @param {Optional} queryParamsDict Use Optional to wrap Object
     * @param {Optional} body Use Optional to wrap Object
     * @returns {Promise<Response>}
     */
    async post(path, pathParams = Optional.empty(), queryParamsDict = Optional.empty(), body = Optional.empty()) {
        return this.request('POST', path, pathParams, queryParamsDict, body);
    }

    /** Update an existing resource
     * 
     * @param {string} path 
     * @param {Optional} pathParams Use Optional to wrap string[]
     * @param {Optional} queryParamsDict Use Optional to wrap Object
     * @param {Optional} body Use Optional to wrap Object
     * @returns {Promise<Object>}
     */
    async put(path, pathParams = Optional.empty(), queryParamsDict = Optional.empty(), body = Optional.empty()) {
        return this.request('PUT', path, pathParams, queryParamsDict, body);
    }

    /** Delete an existing resource
     * 
     * @param {string} path 
     @param {Optional} pathParams Use Optional to wrap string[]
     * @param {Optional} queryParamsDict Use Optional to wrap Object
     * @returns {Promise<Response>}
     */
    async delete(path, pathParams = Optional.empty(), queryParamsDict = Optional.empty()) {
        return this.request('DELETE', path, pathParams, queryParamsDict, {});
    }
}

