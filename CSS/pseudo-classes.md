# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class `:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child
* :nth-of-type()
* :nth-child() - podemos usar even ou odd, como parâmetros

## Ações do usuário

* :hover
* :focus

## Atributos

* :disabled
* :required

## Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

# Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

`::pseudo-element-name`

## Exemplos

* ::before
* ::after
* ::first-line

```html
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```

```css
li::before {
  content: "> "
}

p::first-line {
	font-weight: bold;
}
```


## Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements