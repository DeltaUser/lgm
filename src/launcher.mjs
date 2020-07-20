/**
 * @allowDocs
 * @author DeltaUser
 * @name Launcher
 * @type class
 * @description Launcher that puts all the files together. 
 */

import User from './User.mjs';

export default class launcher {
    constructor(options={}) {
        this.user = new User(this);
        this.options = options;
    }

    async login(options=this.options) {
        return this;
    }
}