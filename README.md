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

# ferramentas
- https://www.notion.so/ - anotações, lista de todo
- https://www.figma.com/ - design de interface colaborativa
- https://expo.io/       - rodar apps em android e iphone
- https://insomnia.rest/ - rest client
- http://knexjs.org/     - ORM para banco de dados


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