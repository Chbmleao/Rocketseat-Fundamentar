# Programação funcional

Organizar uma linha de raciocínio
Entender uma nova maneira de abordar os problemas
Algumas tecnologias tem como requisito

É um paradigma de programação como a orientação a Objetos
    Uma maneira de resolver problemas

Funções
    Pequenas tarefas dentro de uma função
    Abstrair um problema e isolar ele dentro da função
    Não modificar dados fora dela
    Pequenas e bem específicas no que fazem

Característica principais da função
    Um dado (ou mais) entra em uma função e um novo dado sai dessa função
    Não altera dados
    Não guarda estado *stateless*

Linguagens funcionais
    JavaScript (multiparadigma)
    PHP (multiparadigma)
    Elixir
    Haskell

Pontos positivos
    Fácil manutenção
    Fácil uso de testes
        Funções isoladas e consistentes
    Códigos mais confiáveis

## Paradigmas

Programação Imperativa e Declarativa

```js
// Função que eleva o número ao quadrado

// Imperativo: Faça da seguinte forma
let number = 2

function square() {
    return number * number
}

number = square()

// Declarativa: O que fazer e não como fazer.
const square = n => n * n
```

### Programação Imperativa

O código é pensado e gerado em sequência.
O código é pensado como um passo-a-passo, como uma receita de bolo
Uma coisa depende da outra
O estado de um dado é alterado constantemente causando mutações nas variáveis
Orientação a Objetos é um tipo de paradigma imperativo

### Programação Declarativa

O código é gerado para fazer algo, não importa como
O que fazer e não como fazer
Não há necessidade de um passo a passo no código
Programação funcional é um tipo de paradigma declarativo

## Imutabilidade

Uma variável não vai variar
Se você precisar mudar uma variável, você não muda, você *cria uma nova*

## Stateless

Não guarda estado
A função só conhece dados entregues a ela
A resposta não pode nunca variar

## Funções

### Funções Independentes

Deverá ter ao menos 1 argumento
Deverá retornar algo
Nada que acontecer lá dentro afeta o mundo externo
    Dados imutáveis
    Não guardar estado
Não faremos uso de loops (for, while), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma)

### Funções Puras

Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
Não deverá sofrer nenhuma interferência do mundo externo a ela
Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
Não terá nenhum efeito colateral no seu código
    Não irá modificar nenhum dado
    Não irá guardar nenhum estado

### First-class function

Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
A função poderá ser entendida como uma variável

```js
const sayMyName = () => console.log('Carlos')
const runFunction = fn => fn()

runFunction(sayMyName)
```

### Higher-order

Funções que recebem funções como argumentos
Funções que poderão retornar outras funções

```js
// Exemplo com .map()
const number = [2, 4, 8, 16]

const square = n => n * n

const squaredNumbers = numbers.map(square)

// Exemplo de um retorno de função
// (currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait)

pause(600)( () => console.log('waiting 600 ms'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('waiting 200ms'))
wait1000(() => console.log('waiting 1s'))

```

### Composição de funções

Um encadeamento de funções
Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função, que retorna

```js
const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartWithD = people
    .filter(person => person.startsWith('D'))
    .map(dperson => dperson.toUpperCase())
```

## Conclusão

Paradigma de Programação
Linguagens
Conceitos fundamentais
    Stateless, Imutabilidade, Função pura, Higher-orders...