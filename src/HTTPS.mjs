import request from 'request-promise';

export default class HTTPS {
    constructor(defaultOptions) {
        this.CookieJar = new request.jar();
        this.defaultRequest = request.defaults({
            "jar": this.CookieJar,
            "resolveWithFullResponse": true,
            ...defaultOptions
        });
    }

    async request({ uri, method="get", headers={}, options={} }) {
        return await this.defaultRequest({
            headers,
            method,
            uri,
            ...options
        });
    }

    async rq(uri, method, headers) {
        return await this.request({
            uri,
            method,
            headers
        });
    }
}