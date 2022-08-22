/* 
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__

*/

/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

console.log('9' + 5)            // resultado 95, uma string
console.log(Number('9') + 5)    // resultado 14, um number

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// -------------Manipulando Strings e Números-------------

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepípedo"
console.log(word.length)
let otherNumber = 1234
console.log(String(number).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let fractionalNumber = 34342421.32443241
console.log(fractionalNumber)
console.log(fractionalNumber.toFixed(2).replace(".", ",")) 
// OBS: o replace faz a variável deixar de ser um número, vira uma string

// Transforme letras minúsculas em maiúsculas.
let otherWord = "Programa é muito bacana!"
console.log(otherWord.toLowerCase().toUpperCase())

// Verificar se o texto contém uma palavra específica
let phrase = "Eu quero viver o amor!"
console.log(phrase.includes("amor"))

// Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let text = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let textWithUnderscore = myArray.join("_")
console.log(textWithUnderscore)


// ---------------Manipulando Arrays-----------------

// Criar Array com construtor
let otherArray = new Array('a', 'b', 'c')
console.log(otherArray)
otherArray = new Array(10)
console.log(otherArray)

// Contar elementos de um array
console.log(otherArray.length)

// Transformar um cadeia de caracteres em elemetnos de um array
word = "manipulacao"
console.log(Array.from(word))

// Maniplando Array techs
let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no comeco
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1,3))
// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)