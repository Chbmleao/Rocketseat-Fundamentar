// CRIANDO E ADICIONANDO ELEMENTOS

// createElement
const div = document.createElement('div')
div.innerText = "Olá DEVS!"

// append prepend
const body = document.querySelector('body')

body.append(div)
body.prepend(div)

// insertBefore
const script = body.querySelector('style')
body.insertBefore(div, script)