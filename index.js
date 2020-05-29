// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// console.log(person1.greeting());

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url === '/') {
    res.end('<h1>Home</h1>');
  }
});

// look for env variable, if not found run on 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
