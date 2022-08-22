// Variáveis e tipos de dados
// declaration
var name

// assignment
name = "Carlos"

// que tipo de dado foi colocado
console.log(typeof name)

let age, isHuman
age = 19
isHuman = true

//  multiplos argumentos na funcao
console.log(name, age, isHuman)

// escrita de texto + variáveis, concatenando valores
console.log("O " + name + " tem " + age + " anos.")

// interpolação de valores com template literals or template strings
console.log(`O ${name} tem ${age} anos.`)

// Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos.`)

// Array

const animals = [
    'Lion',
    'Monkey',
    {
        name:'Cat',
        age: 3
    }
]

console.log(animals[2])
console.log(animals.length)