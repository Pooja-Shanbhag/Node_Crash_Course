// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// console.log(person1.greeting());

const Logger = require('./logger');

const logger = new Logger();
logger.on('message', (data) => console.log('Called Listner: ', data));

logger.log('Hello world');
logger.log('Hello world2');
logger.log('Hello world3');
