const path = require('path');

// no-buffer-constructor
Buffer.alloc(5);
Buffer.allocUnsafe(5);
Buffer.from([1, 2, 3]);

Buffer.alloc(res.body.amount);
Buffer.from(res.body.values);

// no-path-concat
let fullPath = path.resolve(__dirname, 'foo.js');
