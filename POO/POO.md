# Programação Orientada a Objetos - POO

Oriented Object Programming ou OOP
Um paradigma de desenvolvimento
Uma maneira de resolver um problema, um modo de pensar
Não está ligado somente à linguagem de programação, mas a um entendimento amplo e atemporal para criação de softwares

## Utilização no mercado

Na maioria dos sistemas atuais
JS, TS, Java, Python
Utilizado por Analistas de Sistemas e não somente por programadores
    Na fase de levantamento de requisito de sistemas
    Via gráficos, desenhos e textos

## Onde e quando eu vou utilizar?

Linguagens
Quando quiser aplicação Padrões de Projetos
Quando quiser organizar seu código
Para melhor entendimento do código, pensando nele como Objetos
Quando precisar fazer reuso de código
Para separar a complexidade de código, abstrair código e expor de maneira mais simples
Para classificar as rotinas e trechos de código

## Conceitos

Precisamos entender os conceitos e paradigma e não somente códigos
Uma boa fundamentação é muito importante

## Objetos

Uma caneta é um objeto

Todo objeto possui
    Propriedades e Funcionalidades
    Estado e Comportamentos
    Atributos e Métodos

### Objetos abstratos vs objetos do mundo real

Trazemos a representação de algo do mundo real para Objetos
    Pessoa
    Aluno
    Produto
    Carrinho de compras

Porém, alguns objetos na programação não são fáceis de identificar, pois são abstratos como, por exemplo:
    Autentificação
    Autorização

OBS: Nem todo objeto do mundo real fará parte do seu sistema.

## Classes 

As classes na orientação a objetos funcionam como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.

Exemplo: Máquina de biscoito
    Instâncias

### Classes em JavaScript

Syntactical sugar
Prototype

```js
// definir classe
class Pessoa {
    constructor(nome) {
        this.id = ~~(Math.random() * 100000)
        this.nome = nome
    }

    dizerNome() {
        console.log(this.nome)
    }
}

// criar objeto
const pessoa = new Pessoa('carlos')

```

## Encapsulamento

Dirigir o carro vs conhecer o motor do carro

Colocar num cápsula
Agrupamento de funções e variáveis
Esconder detalhes de implementação
Camada de segurança para os atributos e métodos

## Programação Estruturada vs OO

```js
// estruturado 
var valorHora = 50
var tempoEstimado = 20
var desconto = valorHora * tempoEstimado * (10 / 100)
var custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)

// POO
const job = new Job()
job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa()
console.log(custoEstimado)

```

### Programação Estruturada

Processa a entrada e manipulação dos dados, até a saída
Uso de sequências, estruturas de repetição e condições
Uso de uma rotina maior, ou sub-rotinas
Não existem restrições às variáveis

### Programação Orientada a Objetos

Surge para trazer um cuidado ao uso estruturado
    Não elimina por completo o uso estruturado
Conceitos como Objetos e Classes
Cuidados com variáveis e rotinas (Encapsulamento)
Melhor reuso de código (Herança)

## Herança

Pais e filhos
Objetos podem herdar, ou estender, características bases
Uma cópia de atributos e métodos de outra classe

```js
class Veiculo {
    rodas = 4

    mover(direcao) {}
    virar(direcao) {}
}

class Moto extends Veiculo {
    constructor() {
        super() // puxar atributos e métodos do pai
        this.rodas = 2
    }
}

```

OBS: Um objeto pode estender de outro objeto que opde estender de outro objeto
Fácil reutilização de código

## Polimorfismo

Quando um objeto estende de outro *herança* talvez haja a necessidade de reescrever uma ou mais características *atributos e métodos* nesse novo objeto.

Recriaremos então um método (ou mais) da classe herdada.

Polimorfismo significa *muitas formas*.

```js

class Atleta {
    peso
    categoria

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = 'infantil'
        }
        else if (this.peso <= 65) {
            this.categoria = 'juvenil'
        }
        else {
            this.categoria = 'adulto'
        }
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'pluma'
        }
        else if (this.peso <= 60) {
            this.categoria = 'leve'
        }
        else if (this.peso <= 75) {
            this.categoria = 'meio-leve'
        }
        else {
            this.categoria = 'pesado'
        }
    }
}
```

## Abstração

Template ou Identidade de um classe que será construída no futuro

Atributos e métodos podem ser criados na classe de Abstração (Superclasse) MAS
A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração

```js
// definir
class Parafuso { // Superclasse - Abstrata
    constructor() {
        if (this.constructor === Parafuso)
            throw new Error('Classe abstrata não pode ser instânciada!')
    }

    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() {
        super()
    }

    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() {
        super()
    }

    get tipo() {
        return 'philips'
    }
}
```