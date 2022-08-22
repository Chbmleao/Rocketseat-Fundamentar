// Passo 1: Modelando
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}

// Passo 2: Utilizando
const queue = new Queue()

queue.enqueue('Carlos')
queue.enqueue('João')
queue.enqueue('Ariel')
queue.dequeue()
queue.dequeue()
queue.dequeue()
