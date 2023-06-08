let Module = require('module');

Module.wrap = (function (exports, require, module, __filename, __dirname) {
    // What you want the new wrapper to be.
    return Module.wrapper[0] + exports + 'console.log("This is the wrapper.");' + Module.wrapper[1];
});