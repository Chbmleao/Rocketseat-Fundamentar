// flow control

// if...else

let temperature = 38
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature){
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// switch 

let expression = 'd'

switch (expression) {
    case 'a':
        // ...
        console.log('a')
        break;
    
    case 'b':
        // codigo para expression b
        console.log('b')
        break;
    default:
        console.log('default')
        break;
}

function calculate (number1, operator, number2) {
    let result = 0

    switch (operator) {
        case '+':
            result = number1 + number2
            break;

        case '-':
            result = number1 - number2
            break;

        case '*':
            result = number1 * number2
            break;

        case '/':
            result = number1 / number2
            break;
        
        default:
            console.log('nao implementado')
            break;
    }

    return result
}

console.log(calculate(6, '/', 8))


// throw 

function sayMyName(name = '') {
    if(name === '') {
        throw new Error("Nome é necessário!")
    }

    console.log('depois do erro')
} 

// try...catch
try {
    sayMyName()
} catch(error) {
    console.log(error)
}

console.log('após a função de erro')