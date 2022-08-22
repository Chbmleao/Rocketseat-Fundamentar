// NAVEGANDO PELOS ELEMENTOS

// Navegando pelos pais
// parentNode parentElement
const body = document.querySelector('body')

console.log(body.parentElement)

// Navegando pelos filhos
// childNodes children
console.log(body.childNodes)
console.log(body.children)
// firstChild firstElementChild
console.log(body.firstChild)
console.log(body.firstElementChild)
// lastChild lastElementChild
console.log(body.lastChild)
console.log(body.lastElementChild)

// Navegando pelos irmãos
// nextSibling nextElementSibling
console.log(body.nextElementSibling)
// previousSibling previousElementSibling
console.log(body.previousElementSibling)