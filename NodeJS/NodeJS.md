# O que é?

- JS Runtime Environment - "Mini sistema operacional"
- O JS Runtime Environmente troca informações com o sistema operacional que troca informações com o hardware
- O NodeJS não é um Framework nem uma linguagem

# Vantagens
- Rápido 
    - Execução
    - Prototipar
- Alta escalabilidade
- Aplicações de ponta
- JS everywhere
- Ecosistema gigante
- Casos de uso
    - Netflix
    - Paypal

# V8

- Interpretador de JS para linguagem de máquina
- Criado em C++
- Baseado nas últimas features do JS
- Focado para Chrome mas tem todo o cuidade de não quebrar o Node
- Não possui a DOM, console ou File System

# Como funciona?

- multithreading

```js
function c() {
    setTimeout(() => {console.log('c')}, 1000)
    return
}

function b() {
    console.log('b')
    return c()
}

function a() {
    b()
    console.log('a')
    return
}

a()

```

Saída:
b
a
c