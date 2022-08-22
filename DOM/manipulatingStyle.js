// ALTERANDO ESTILOS
let element = document.querySelector('body')

element.style.backgroundColor = "#f9f3d2"

console.log(element.style.backgroundColor)

// classList
element = document.querySelector('body')

element.classList.add('active', 'large')
element.classList.remove('active')
element.classList.toggle('active')

