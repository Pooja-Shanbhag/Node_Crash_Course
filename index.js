// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// console.log(person1.greeting());

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if (err) throw err;
  //     // content type
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(data);
  //   });
  // }
  // if (req.url === '/api/user') {
  //   const users = [
  //     { name: 'Bob Smith', age: 40 },
  //     { name: 'John Doe', age: 30 },
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }
  //Build file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  //Extension of file
  let extname = path.extname(filePath);
  //initial content type
  let contentType = 'text/html';

  // check ext and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'img/jpg';
      break;
  }

  //Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // ENOENT i snot found
      if (err.code == 'ENOENT') {
        //Page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err}`);
      }
    } else {
      //Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
  // res.end();
});

// look for env variable, if not found run on 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
