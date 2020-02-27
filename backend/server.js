const express = require('express');
const server = express();

require('./models/comments');



// configurar banco de dados
const Pool = require('pg').pool;
const db = new Pool({
  user: 'postgres',
  password: '12345',
  host: 'localhost',
  port: 5432,
  database: 'naveteam'
});

// configurar a apresentação da pagina
server.get('/', (req, res) => {
  res.send('Hello, NaveTeam!');
});


// inserindo no banco de dados
const query = `INSERT INTO comments(author, title, text, created_at) 
VALUES($1, $2, $3, current_date)`;
db.query(query, []);


// ligar o servidor e permitir o acesso na porta 3001 
server.listen(3001, () => console.log('Servidor iniciado.'));