const {EventEmitter} = require('events')
const ev = new EventEmitter()

// escuta todas as vezes
ev.on('saySomething', (message = 'something') => {
    console.log(`I listened, someone said ${message}.`)
})

// escuta apenas uma vez
ev.once('saySomething', (message = 'something') => {
    console.log(`I listened, someone said ${message}.`)
})

ev.emit('saySomething', 'Carlos')
ev.emit('saySomething')

ev.emit('saySomething', 'depois')