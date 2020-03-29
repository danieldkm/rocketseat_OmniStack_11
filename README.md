# RocketSeat Semana OmniStack 11.0

# comandos - dia 1
- /backend npm init -y
- /backend node index.js
- / npx create-react-app frontend
- /frontend npm start
# comandos - dia 2
- /backend npx knex init  // configurações de acesso ao banco de dados com knex
- /backend npx knex migrate:make create_ongs
- /backend npx knex migrate:latest
- /backend npx knex migrate:rollback
- /backend npx knex migrate:status
# comandos - dia 3
# comandos - dia 4
- npm install -g expo-cli
- expo -h
- expo init mobile
- npm install @react-navigation/native
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view  
- npm install @react-navigation/stack
- expo install expo-constants
- expo install expo-mail-composer
- npm install axios
- npm install intl
# comandos - dia 5
- npm install celebrate // validação dos dados de requisição
- npm install jest // testes automatizados
- npx jest --init
- npm install cross-env
- npm install supertest --save-dev / -D // biblioteca para realizar requisições HTTP para testes de integração.

# ferramentas
- https://www.notion.so/ - anotações, lista de todo
- https://www.figma.com/ - design de interface colaborativa
- https://expo.io/       - rodar apps em android e iphone
- https://github.com/Rocketseat/expo-common-issues - comandos comuns do expo pela RocketSeat
- https://snack.expo.io/ - rodar app online - nao recomendado
- https://insomnia.rest/ - rest client
- http://knexjs.org/     - ORM para banco de dados
- Icones:
    - https://fontawesome.com/
    - https://feathericons.com/
    - https://material.io/resources/icons/?style=baseline

# Documentação Back-end
- https://documenter.getpostman.com/view/2048976/SzYT5MqZ?version=latest

# Conceitos

## Rota / recurso
 
## Métodos HTTP:
- GET: Buscar/listar uma informação do back-end
- POST: Criar uma informação do back-end
- PUT: Alterar uma informação do back-end
- DELETE: Deletar uma informação do back-end

## Tipos de parâmetros:
- Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
- Route params: Parâmetros utilizados para identificar recursos
- Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

    ### express types request
    - request.query
    - request.params
    - request.body

## Banco de dados
- SQL: MySQL, SQLite, PostgreSQL, ORACLE, Microsoft SQL Server
- NoSQL: MongoDB, CouchDB, etc

## React Native
- Não utiliza as mesmas tags do html
- Não há semantica igual no html web
- O style é um objeto

## Deploy de app
- heroku (gratuito para teste) / digital ocean para node exemplo no canal do rocketseat do youtube.
- https://www.netlify.com/ (especifico para front) para react

## Estudos
- Padrões de código: ESLint, Prettier
- Autenticação JWT
- Styled Components