export class api {
    constructor() {
        this.apiUrl = "https://sjvf78xp-8080.use2.devtunnels.ms/"
        this.localUrl = "http://127.0.0.1:8080/"
        this.url
        this.connectionStatus
    }

    async connect() {
        if (await checkUrl(apiUrl)) {
          url = apiUrl;
        }
        else if (await checkUrl(localUrl)) {
          url = localUrl;
        }
        
        connectionStatus = false;
    }

    /**
     * 
     * @param {string} path 
     * @param {[]} pathParams 
     * @param {{}} queryParams 
     * @returns 
     */
    async get(path, pathParams, queryParams) {
        const queryParamsList = Object.keys(queryParams).map(key => key + '=' + queryParams[key]);

        const response = await fetch(url + path + pathParams.join('/') + "/?" + queryString.join('&'));
        return response.json();
    }
}



