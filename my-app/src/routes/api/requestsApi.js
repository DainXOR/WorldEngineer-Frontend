import { Optional } from "../../tools/optional"

export class api {
    #apiUrl
    #localUrl
    #url
    #connectionStatus

    constructor() {
        this.#apiUrl = "https://sjvf78xp-8080.use2.devtunnels.ms/"
        this.#localUrl = "http://127.0.0.1:8080/"
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
        if (await checkUrl(this.#apiUrl)) {
            this.#url = this.#apiUrl;
            return true;
        }
        else if (await checkUrl(this.#localUrl)) {
            this.#url = this.#localUrl;
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
     * @returns {Promise<Object>}
     */
    async request(method, path, pathParams, queryParams, body) {
        const response = await fetch(
            this.#url + 
            path + 
            pathParams.transformOrDefault(arr => arr.join('/'), '') +
            queryParams.transformOrDefault(d => d.length > 0 ? "/?" + Object.keys(d).map(k => k + '=' + d[k]).join('&') : '', ''), 
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body.getOrDefault({}))
            }
        );
        return response.json();
    }

    /** Get a resource
     * 
     * @param {string} path 
     * @param {Optional} pathParams Use Optional to wrap string[]
     * @param {Optional} queryParamsDict Use Optional to wrap Object
     * @returns {Promise<Object>}
     */
    async get(path, pathParams = Optional.empty(), queryParamsDict = Optional.empty()) {
        return this.request('GET', path, pathParams, queryParamsDict, {});
    }

    /** Create a new resource
     * 
     * @param {string} path 
     * @param {Optional} pathParams Use Optional to wrap string[]
     * @param {Optional} queryParamsDict Use Optional to wrap Object
     * @param {Optional} body Use Optional to wrap Object
     * @returns {Promise<Object>}
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
     * @returns {Promise<Object>}
     */
    async delete(path, pathParams = Optional.empty(), queryParamsDict = Optional.empty()) {
        return this.request('DELETE', path, pathParams, queryParamsDict, {});
    }
}

