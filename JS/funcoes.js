// FUNCTIONS

// declaration - declaração da função
// function statement
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}

// executar a função, execute, run, call, invoke
createPhrases()

// -------------------------------------

// function expression
// function anonymous
// parâmetros (parameters)
const sum = function(number1, number2) {
    return number1 + number2
}

console.log(sum(2,3)) // arguments

// ----------------------------------

// function hoisting

sayMyName()

function sayMyName() {
    console.log('Carlos')
}

// porém, se fizessemos dessa forma, não funcionaria

// const sayMyName = function sayMyName() {
//     console.log('Carlos')
// }

// ------------------------------

// arrow function

const saySomething = (name) => {
    console.log(name)
}

const swap = (X, Y) => {let aux = X; X = Y; Y = aux;}

saySomething('Carlos')

// -------------------------

// callback function

function doSomething(funcao) {
    console.log('antes de executar a funcao callback')

    funcao()

    console.log('depois de executar a callback')
}

doSomething(
    () => {
        console.log('estou em uma callback')
    }
)

doSomething(sayMyName)

// ---------------------------------

// Function() constructor

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando!"
    }
}
const carlos = new Person("Carlos")
const joao = new Person("João")
console.log(carlos)
console.log(joao)

console.log(carlos.walk())
console.log(joao.walk())