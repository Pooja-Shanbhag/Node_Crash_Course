// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// console.log(person1.greeting());

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    // content type
  }

  if (req.url === '/api/user') {
    const users = [
      { name: 'Bob Smith', age: 40 },
      { name: 'John Doe', age: 30 },
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
});

// look for env variable, if not found run on 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
