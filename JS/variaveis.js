// VARIÁVEIS

let clima = "Quente"
console.log(clima)
clima = "Frio"
console.log(clima)

// Variáveis não precisam ter um tipo anteriormente definido, fracamente tipada
// linguagem dinâmica, pode mudar o tipo da variável
// porém, uma constante não pode ser alterada

// ----------------------------------------------------------------

// SCOPE

// Escopo determina a visibilidade de alguma variável no JS
// var é global e local
// const e let são lcoais e só funcionam no escopo onde foi criada


console.log("existe x antes do bloco? ", x)

{
    var x = 0
}

console.log("existe x depois do bloco? ", x)