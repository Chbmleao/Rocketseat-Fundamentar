// EXERCICIO 3 - Celsius em fahrenheit 

/*

Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 

C = (F - 32) * 5/9

F = C * 9/5 + 32

*/

function convertTemperature(temperature) {
    const celsiusExists = temperature.toUpperCase().includes('C')
    const fahrenheitExists = temperature.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error(`Temperatura inválida: ${temperature}`)
    }

    let celsius = 0
    let fahrenheit = 0

    if(celsiusExists) {
        celsius = temperature.toUpperCase().replace("C", "")
        celsius = Number(celsius)   

        fahrenheit = celsius * 9 / 5 + 32
        fahrenheit = String(fahrenheit)
        fahrenheit += "F"

        return fahrenheit
    } else {
        fahrenheit = temperature.toUpperCase().replace("F", "")
        fahrenheit = Number(fahrenheit)

        celsius = (fahrenheit - 32) * 5 / 9
        celsius = String(celsius)
        celsius += "C"

        return celsius
    }
}

try {
    console.log(convertTemperature("50F"))
    console.log(convertTemperature("10c"))
    convertTemperature("50Z")
} catch (error) {
    console.log(error)
}


