class Http {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async #send(endpoint, options = {}, data = {}) {
        if(!endpoint.startsWith("/")) throw "INVALID ENDPOINT";
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const data = await response.json();
        if(response.status !== 200 && response.status !== 201) {
            throw { message: data.error.message };
        }

        return data;
    }
}