const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const mario = new Character('Mario')
mario.on('help', () => console.log(`It's me! ${mario.name}!!`))

console.log('Oh no! Bowser kidnlapped Princess Peach! Who could save us?!')
mario.emit('help')

