// global-require
if (DEBUG) { require('debug'); }

// no-buffer-constructor
new Buffer(5);
new Buffer([1, 2, 3]);
Buffer(5);
Buffer([1, 2, 3]);
new Buffer(res.body.amount);
new Buffer(res.body.values);

// no-new-require
const appHeader = new require('app-header');

// no-path-concat
let fullPath = __dirname + '/foo.js';
fullPath = __filename + '/foo.js';
