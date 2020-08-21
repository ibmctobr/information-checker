# Validação de informações

Verifique se o seu boleto é válido ou não a partir do número do boleto e o valor. Este projeto faz a validação apenas dos 
boletos da Crefisa, porém pode ser usado como base para a validação em outros bancos.
Além disso, é possível obter informações sobre um veículo com os dados da Sinesp a partir da placa do veículo.

## Tecnologias
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Request](https://www.npmjs.com/package/request)
- [Sinesp-api](https://www.npmjs.com/package/sinesp-api)

## Como rodar o projeto
```
# Acesse a pasta do projeto
$ cd information-checker

Instale as dependências
$ npm install

Execute a aplicação
$ npm start

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```

## Como usar
### Validação de boletos
- Realize um POST na rota `/boletos` com a seguinte estrutura do body:
```
{
    "boleto": NUMERO_DO_BOLETO,
    "valor": VALOR_DO_BOLETO
}
```
- Caso a requisição seja bem-sucedida, a resposta será no seguinte formato:
```
{
    "text": RESPOSTA
}
```

### Obter informações de veículos
- Realize um POST na rota `/veiculos` com a seguinte estrutura do body:
```
{
    "placa": PLACA_DO_VEICULO
}
```
- Caso a requisição seja bem-sucedida, seram retornados as informações sobre o veículo, como marca, modelo, 
ano, cor, situação, entre outros.
