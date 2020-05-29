const http = require('http');

// Create server object
http
  .createServer((request, response) => {
    // write response
    response.write('Hello world');
    response.end();
  })
  .listen(5000, () => console.log('Server running'));
