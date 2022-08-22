// EVENTOS

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

h1.onclick = print

function print() {
    console.log('print')
}

const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('rodei')
}

// melhor forma de utilizar seria addEventListener()

// argumento event

input.onkeypress = function(event) {
    console.log(event.code)
}