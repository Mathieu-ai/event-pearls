const events = require('events')
var eventEmitter = require('events')
var myEmitter = new eventEmitter()

function empty() {
    var eventEmitter = new events.EventEmitter();
    eventEmitter.addListener('hi', () => console.log("hi") );
    eventEmitter.emit('hi');
}

myEmitter.on('NewFellow', (name) => console.log(`here come's a new pirate ->> ${name}`) )

function withArgs (names) {
    names.forEach( name => myEmitter.emit('NewFellow', name) );
}

withArgs([
    'Luffy',
    'Zorro',
    'Usopp',
    'Robin',
    'Nami',
    'Sanji',
    'Ch0pper'
])

module.exports = {
    empty,
    withArgs
} 