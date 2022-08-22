# Layouts e evolução

Layout tem a ver com a maneira que os elementos estão distribuidos na tela

## Normal flow

Ou Flow Layout é a maneira que os elementos `block` e `inline` ficam na página

```html
<p> Texto block com <strong>inline</strong> dentro </p>

<div>Outro texto</div>
```

## Tables

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr` possam ser usados para montar uma tabela. 

```html
    <tr>
        <td> Hora </td>
        <td> 20:00 </td>
    </tr>
    <tr>
        <td> Hora </td>
        <td> 20:37 </td>
    </tr>
```

## Tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

```html
<div style="float: left">
    esquerda
</div> 

<div style="float: right">
    direita
</div> 

<div style="clear: both">
    normal
</div> 
```

## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor:
- Alinhamento
- Ordenação
- Tamanhos flexíveis

```html
<div class="flexbox">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>
```

```css
.flexbox {
    display: flex;
    flex-direction: column;
}
```

# Terminologia

- Flex Container
    - Flex item
- Nesting 
- Axis
    - main
        - start, end
    - cross
        - start, end
- Flex sizing
    - flexível
    - altera width/height dos itens para preenchimento dos espaços do flex container

# Propriedades do Flex Container

* Direção dos itens
* Multi linhas
* Alinhamento
    * principal
    * cruzado
* Espaços entre os itens

## Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- podemos mudar a direção com `flex-direction`
- valores: (row | row-reverse | column | column-reverse) 

## flex-wrap

- Podemos usar multi linhas.
- Cada nova linha, um novo flex container.

## flex-flow

- shorthand 
- flex-direction || flex-wrap

## justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

### valores

- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly

## align-itens

- Alinhamento dos elementos no eixo cruzado

### valores

- stretch
- flex-start
- flex-end
- center

## gap

- Espaços entre os elementos

### valores

- Unidades de medidas
- fixas: px, pt
- flexíveis: %, em, rem

# Propriedades para os itens

- flex-basis
- flex-grow
- flex-shrink
- flex
- order

## flex-grow

- O crescimento do item dentro do container em relação aos espaços vazios.

## flex-shrink

- O encolher do item dentro do container.

## flex

- shorthand
- flex-grow flex-shrink flex-basis
- podem ter 1, 2 ou 3 valores

# order

- Altera a ordem dos itens visualmente, mas não estruturalmente no HTML.