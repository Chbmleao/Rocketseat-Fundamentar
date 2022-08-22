// getElementById()
const idElement = document.getElementById("blog-title")
console.log(idElement)

// getElementsByClassName()
const classElement = document.getElementsByClassName("one")
console.log(classElement)

// getElementsByTagName()
const tagElement = document.getElementsByTagName("meta")
console.log(tagElement)

// querySelector()
const queryElement = document.querySelector(".one")
console.log(queryElement)

// querySelectorAll()
const elements = document.querySelectorAll('meta')
console.log(elements)

elements.forEach(el => console.log(el))

// Qual usar?

// getElementById           (element)
// getElementsByClassName   (HTMLCollection)
// getElementsByTagName (HTMLCollection)
// querySelector        (element)
// querySelectorAll      (Nodelist)   