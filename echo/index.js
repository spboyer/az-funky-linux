module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const os = require("os");
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Hello from " + os.hostname() + " [" + os.platform() + ", " + os.arch() + "]"
    }
    context.done();
};