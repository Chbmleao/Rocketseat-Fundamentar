# HyperText Transfer Protocol

Protocolo de Transferência de HyperText

## Visão Geral

Permite troca de informações e dados na internet.
Uma troca de mensagens.
HTML, CSS, Scripts, Imagens, Vídeos
Uma chamada para cada um desses recursos

## Conceito

### Simples

É legível para qualquer pessoa

### Cliente/Servidor

Requisição/Resposta
É como pedir um lanche

### Stateless

Não guarda informações
Não existe relação entre conexões
Seria como jogar uma moeda, não é porque uma vez caiu cara que sempre cairá cara.
Sessõpes -> cookies ou storages

### Extensível

Através do cabeçalho (HEADER), podemos fazer diversas trocas de informações entre o cliente-servidor, conforme a necessidade

## Cliente

Cliente é o User Agent, no caso o Browser ou o cURL, por exemplo
Cliente é a entidade que dá início à comunicação

### Pedidos

Pedidos são ações do cliente, que podem ser:
- GET
- POST
- PUT
- DELETE

## Servidor

- Se apresenta como uma máquina
- Preparado para ouvir e processar
- Vários servidores em um computador
- Resposta gera um Status Code (404 ou 200 por exemplo)

## Proxies

- Representantes
- Fica entre o cliente e o servidor
- Ajudam a fazer o trasnporte dos dados
- Diversas funções:
    - Cache
    - Filtro (como um antivírus, ou controle parental)
    - Load balancing (distribuição da carga)
    - Autenticação
    - Autorização

## URI

- Uniform Resource Identifier

- Identificar um Recurso pelo Nome ou Localização

- Exemplo
    - Você é um Recurso
    - Você possui um nome
    - E uma localização

### Recurso

- O alvo do pedido
- Qualquer coisa identificável / Entidade
    - Digital     (Email)
    - Abstrata    (Sessão, autentificação)
    - Física      (Produtos, usuários)

- Se podemos identificar, nomear, endereçar ou manipular, estamos falando de um recurso.

### URL

- Locator
- Uniform Resource Locator

- Componentes 
    - obrigatórios
        - Protocolo
        - Domínio
    - opcionais
        - Subdomínio
        - Path
        - Parâmetros
        - Porta
        - Âncora

- Exemplos
    - https://www.rocketseat.com.br/blog
    - https://www.youtube.com/watch?v=vpYct2npKD8
    - htttp://127.0.0.1:3333/index.html#algumlugar

### URN

- Uniform Resource Name

- Exemplo
    - urn:isbn:0451450523

## Messages

- HTTP Messages
- Request / Response

- Mensagens

- HTTP/1.1
   - Legível
   - Texto

- HTTP/2
    - Estrutura binária
    - Otimizações
    - Mesma maneira que a versão 1.1

### Request

- "Pedido"

- Request Line
    - Method
    - Protocol version
    - URI

- Body
- Headers

### Response

- "Resposta"

- Protocol Version
- Status code
- Headers
- Status message

## Methods

