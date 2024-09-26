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
        this.connectionStatus = true;
        if (await checkUrl(this.apiUrl)) {
            this.url = this.apiUrl;
            return true;
        }
        else if (await checkUrl(this.localUrl)) {
            this.url = this.localUrl;
            return true;
        }
        else {
            this.connectionStatus = false;
            return false;
        }
    }

    /** Check connection status
     * 
     * @returns {Promise<boolean>}
     */
    async checkConnection() {
        return this.checkUrl(this.url);
    }

    /** Makes a request to the API
     * 
     * @param {string} method
     * @param {string} path 
     * @param {[]} pathParams 
     * @param {{}} queryParamsDict 
     * @param {{}} body
     * @returns {Promise<{}>}
     */
    async request(method, path, pathParams, queryParamsDict, body) {
        const queryParams = Object.keys(queryParamsDict).map(key => key + '=' + queryParamsDict[key]);
        const queryString = queryParams.length > 0 ? "/?" + queryParams.join('&') : '';

        const response = await fetch(this.url + path + pathParams.join('/') + queryString, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return response.json();
    }

    /** Get a resource
     * 
     * @param {string} path 
     * @param {[]} pathParams 
     * @param {{}} queryParamsDict 
     * @returns {Promise<{}>}
     */
    async get(path, pathParams, queryParamsDict) {
        return this.request('GET', path, pathParams, queryParamsDict, null);
    }

    /** Create a new resource
     * 
     * @param {string} path 
     * @param {[]} pathParams 
     * @param {{}} queryParamsDict 
     * @param {{}} body 
     * @returns {Promise<{}>}
     */
    async post(path, pathParams, queryParamsDict, body) {
        return this.request('POST', path, pathParams, queryParamsDict, body);
    }

    /** Update an existing resource
     * 
     * @param {string} path 
     * @param {[]} pathParams 
     * @param {{}} queryParamsDict 
     * @param {{}} body 
     * @returns {Promise<{}>}
     */
    async put(path, pathParams, queryParamsDict, body) {
        return this.request('PUT', path, pathParams, queryParamsDict, body);
    }

    /** Delete an existing resource
     * 
     * @param {string} path 
     * @param {[]} pathParams 
     * @param {{}} queryParamsDict 
     * @returns {Promise<{}>}
     */
    async delete(path, pathParams, queryParamsDict) {
        return this.request('DELETE', path, pathParams, queryParamsDict, null);
    }
}

