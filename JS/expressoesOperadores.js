/*
    Expressões e Operadores

    -Expressions
    -Operators
        Binary
        Unary
        Ternary
*/

let number = 1;  //nesse caso precisa de ;

(function() {
    console.log('alo')
})()

console.log(number + 1)             //operador binario
console.log(++number)               //operador unário
console.log(true ? 'alo' : 'nada')  //operador ternário

/*
    new

    *left-hand-side expression
    *criar um novo objeto
*/
let name = new String('Carlos')
name.surname = 'Leão'
let age = new Number(23)
console.log(name, age)
let date = new Date('2002-09-03')
console.log(date)
console.log(date.__proto__)

/*
    Operadore unários
    typeof
    delete
*/
const person = {
    name: 'Carlos',
    age: 25
}
console.log(person)
delete person.age
console.log(person)

/*
    Operadores Aritméticos
*/
// multiplicação
console.log(3 * 5)
// divisão
console.log(13/2)
// soma
console.log(34 + 67)
// subtração
console.log(34 - 23)

// resto da divisão
console.log(11 % 3)
// incremento
let increment = 0
increment++
increment++
console.log(increment)
// decremento
let decrement = 0
decrement--
decrement--
console.log(decrement)
// exponencial
console.log(3 ** 3)

// OPERADORES DE COMPARAÇÃO
let one = 1
let two = 2

console.log(two == 1)
console.log(one == "1")
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// === estritamente igual
console.log(one === "1")    // false
console.log(one === 1)      // true

// !== estritamente diferente
console.log(two !== "2")    // true
console.log(two !== 2)      // false

// > maior que
// >= maior ou igual a
// < menor que
// <= menor ou igual a
console.log(one <= "1")

// OPERADORES DE ATRIBUIÇÃO
let x

// assigment
x = 1

// addition assignment
x += 2

// subtraction assigment
x -= 4

// multiplication assgnment
x *= 3

// division assignment
// exponencial assignment
// ...

// OPERADORES LÓGICOS
let pao = true
let queijo = true

// AND &&
console.log(pao && queijo)

// OR !! 
console.log(pao || queijo)

// NOT !
console.log(!pao)

// OPERADOR CONDICIONAL TERNÁRIO
// Dependendo da condição nós receberemos valores diferentes
// condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
pao = true
queijo = true

const niceBreakfast = pao && queijo ? "Café top!" : "Café mais ou menos."

console.log(niceBreakfast)

// Maior de 18
age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

// OPERADOR DE STRING (String operator)

// comparison
console.log('a' == "a")

// concatenation
// retorna a união de duas strings
let alpha = 'alpha'
console.log(alpha + 'bet')

/*
FALSY
Quando um valor é considerado false em contextos onde um booleano é obrigatório

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

/*
TRUTHY
Quando um valor é considerado true em contextos onde um booleano é obrigatório

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

/*  OPERATOR PRECEDENCE

    grouping                    ( )
    negação e incremento        ! ++ --
    multiplicação e divisão     * /
    adição e subtração          + -
    relacional                  < <= > >=
    igualdade                   == != ===   !==
    AND                         &&
    OR                          ||
    condicional                 ?:
    assignment                  = += -= *=
*/