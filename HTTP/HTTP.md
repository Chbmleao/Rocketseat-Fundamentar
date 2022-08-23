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

## HTTP Methods

- Define um conjunto de métodos HTTP
- Indica a ação que o cliente deseja operar
- Podem ser chamados de Verbos HTTP
- Cada um possui a sua semântica

- Características
    - Seguro
        - Não altera o estado do servidor
        - Somente leitura
        - Cliente não solicita alterações
        - Não há carga extra para o servidor
        - O servidor é responsável em manter o método seguro
        - Quais são?
            - GET   (GET/search.html HTTP/1.1)
            - HEAD
            - OPTIONS

    - Idempotente
        - Ao executar o método, a resposta deverá ser sempre a mesma
        - Quais são?
            - Todos os seguros são idempotentes
            - PUT
            - DELETE
        - Status code poderá ser diferente
        - O servidor tem a responsabilidade de retornar dados da mesma maneira
        - Essa especificação não é garantia de que todos os servidores irão aplicar o conceito corretamente

### OPTIONS

- Informação sobre disponibilidade da requisição
- Características
    - Seguro: SIM
    - Idempotente: SIM
    - BODY 
        - Request: NÃO
        - Response: NÃO
    - Uso em formulários HTML: NÃO
    - Cacheable: NÃO

### GET

- Pegar um Recurso
- Somente recebe dados
- Características
    - Seguro: SIM
    - Idempotente: SIM
    - BODY 
        - Request: NÃO
        - Response: SIM
    - Uso em formulários HTML: SIM
    - Cacheable: SIM

### HEAD

- Semelhante ao GET, porém recebemos somente o cabeçalho - HEAD/posts
- Características
    - Seguro: SIM
    - Idempotente: SIM
    - BODY 
        - Request: NÃO
        - Response: NÃO
    - Uso em formulários HTML: NÃO
    - Cacheable: SIM

### POST

- Publicar/Cadastrar um Recurso
- Características
    - Seguro: NÃO
    - Idempotente: NÃO
    - BODY 
        - Request: SIM
        - Response: SIM
    - Uso em formulários HTML: SIM
    - Cacheable: SIM

### PUT

- Cria um novo ou atualiza um Recurso (Geralmente atualiza)
    - PUT /profile HTTP/1.1
    - Criação -> Status code 201
    - Atualização -> Status code 204 ou 200
- Características
    - Seguro: NÃO
    - Idempotente: SIM
    - BODY 
        - Request: SIM
        - Response: NÃO
    - Uso em formulários HTML: NÃO
    - Cacheable: NÃO

### PATCH

- Modificação parcial de um recurso
    - Diferença entre o PUT? Geralmente altera apenas uma parte do Recurso
- Características
    - Seguro: NÃO
    - Idempotente: NÃO
    - BODY 
        - Request: SIM
        - Response: SIM
    - Uso em formulários HTML: NÃO
    - Cacheable: NÃO

### DELETE

- Remover um Recurso
- Status code
    - 202: Accepted
    - 204: No content
    - 200: OK
- Características
    - Seguro: NÃO
    - Idempotente: SIM
    - BODY 
        - Request: POSSIBILIDADE
        - Response: POSSIBILIDADE
    - Uso em formulários HTML: NÃO
    - Cacheable: NÃO

## HEADERS

- Cabeçalhos
- Informações adicionais para o pedido ou resposta
- Nome: valor
    - content-type: application/json
    - Content-Type: text/html

## Status

- 100
    - 100: Continue

- 200
    - 200: OK (GET, POST)
    - 201: Created (PUT)
    - 204: No content (DELETE, PUT)

- 300
    - 301: Moved Permanently
    - 308: Permanet Redirect
    - 302: Found
    - 307: Temporary Redirect

- 400 
    - 400: Bad Request
    - 401: Unauthorized
    - 403: Forbidden
    - 404: Not found
    - 405: Method not Allowed
    - 429: Too Many Requests

- 500
    - 500: Internal Server Error
    - 503: Service Unavailable