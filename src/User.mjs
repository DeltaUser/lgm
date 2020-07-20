/**
 * @allowDocs
 * @author DeltaUser
 * @type class
 * @description User's account.
 */

import HTTPS from './HTTPS.mjs';

export default class User {
    constructor(launcher) {
        this.https = new HTTPS();
        this.launcher = launcher;
    }

    async getXSRF() {
        await this.https.rq('https://www.epicgames.com/id/api/reputation');
        await this.https.rq('https://epicgames.com/id/api/csrf');
        return this.https.CookieJar._jar.store.idx['www.epicgames.com']['/id']['XSRF-TOKEN'].value;
    }
}