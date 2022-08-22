// Declare uma variável de nome weight
let weight

// Que tipo de dado é a variável acima?
console.log(typeof weight)
// não possui tipo definido, undefined

// Declare uma vvariável e atribua valores para cada um dos dados
let name = 'Carlos'
let age = 19
weight = 72.68
let isSubscribed = true

// A variável student abaixo é de que tipo de dado?
// object

let student = {
    name: name,
    age: age,
    weight: weight,
    isSubscribed: isSubscribed
}

console.log(typeof student)

console.log(`${student.name} de idade ${age} e ${student.weight} kg.`)

// Declare uma variável do tipo Array, de nome studentes e atribua a ela nenhum valor

let students = []

students = [
    student
]

console.log(students)

console.log(students[0])

// Crie um novo estudante e coloque-o no array

const john = {
    name: 'John',
    age: 24,
    weight: 98.4,
    isSubscribed: false
}

students.push(john)

console.log(students)