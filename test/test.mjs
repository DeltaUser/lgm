/**
 * @forbidDocs
 * @author DeltaUser
 * @type test file
 * @description test the library before publishing
 */

import launcherClass from '../index.mjs';
const launcher = new launcherClass();

(async () => {
    // login
    await launcher.login();
})();