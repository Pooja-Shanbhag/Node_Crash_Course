const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    //Call event
    this.emit('message', { id: uuid.v4(), msg });
  }

  logToFile(msg) {}
}

// module.exports = Logger;

// const Logger = require('./logger');

const logger = new Logger();
logger.on('message', (data) => console.log('Called Listner: ', data));

logger.log('Hello world');
logger.log('Hello world2');
logger.log('Hello world3');
