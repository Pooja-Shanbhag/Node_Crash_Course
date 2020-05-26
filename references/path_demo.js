const path = require('path');

//Base name: gets base file name
console.log(__filename);
console.log('filename');
console.log(path.basename(__filename));

//Directory name
console.log('dir name');
console.log(path.dirname(__dirname));

// File extension
console.log('extension');
console.log(path.extname(__filename));

// Create path object
console.log('path object');
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);

// Concatenate paths
console.log('concatenate');
console.log(path.join(__dirname, 'test', 'hello.html'));
