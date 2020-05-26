const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;
//   console.log('folder created');
// });

// Create a file
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World',
  (err) => {
    if (err) throw err;
    console.log('file written to..');

    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      'Node js Love',
      (err) => {
        if (err) throw err;
        console.log('file written to..');

        fs.readFile(
          path.join(__dirname, 'test', 'hello.txt'),
          'utf8',
          (err, data) => {
            if (err) throw err;
            console.log(data);
          }
        );
      }
    );
  }
);

//Read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//Rename file
fs.rename(
  path.join(__dirname, 'test', 'hello.txt'),
  path.join(__dirname, 'test', 'helloworld.txt'),
  (err) => {
    if (err) throw err;
    console.log('File renamed');
  }
);
