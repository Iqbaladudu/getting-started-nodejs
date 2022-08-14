const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log('started');
})

eventEmitter.emit('start');

// Add arguments
eventEmitter.on('greeting', name => {
    console.log(`Hai ${name}`)
});

eventEmitter.emit('greeting', 'Iqbal')