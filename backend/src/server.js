const express = require('express');
const routes= require('./routes');

require('./database/index');

const server = express();
server.use(express.json());
server.use(routes);


// // configurar banco de dados
// const Pool = require('pg').pool;
// const db = new Pool({
//   user: 'postgres',
//   password: '12345',
//   host: 'localhost',
//   port: 5432,
//   database: 'naveteam'
// });

// configurar a apresentação da pagina
server.get('/', (req, res) => {
  res.send('Hello, NaveTeam!');
});


// ligar o servidor e permitir o acesso na porta 3001 
server.listen(3001, () => console.log('Servidor iniciado.'));