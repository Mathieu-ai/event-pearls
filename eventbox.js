const events = require('events')

function empty() {
    var eventEmitter = new events.EventEmitter();
    eventEmitter.addListener('hi', () => console.log("hi") );
    eventEmitter.emit('hi');
}

module.exports = empty()

var eventEmitter = require('events')
var myEmitter = new eventEmitter()



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