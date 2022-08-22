// Manipulando conteúdo
// textContent
let element = document.querySelector('h1')

element.textContent += " Olá Devs!"

console.log(element.textContent)

// innerText
element.innerText = "Olá Devs"

// innerHTML
element.innerHTML = "Olá Devs! <small>!!!</small>"

// value
element = document.querySelector('input')
element.value = "Valor que eu quiser"

// ATRIBUTOS

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('class')

console.log(headerID.getAttribute('class'))