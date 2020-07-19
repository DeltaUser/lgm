import launcherClass from '../index.mjs';
const launcher = new launcherClass();

(async () => {
    // login
    await launcher.login();
})();