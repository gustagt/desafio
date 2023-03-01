// imports
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

// instacia o app com express
const app = express();

// libera o cors para todos os ips
app.use(cors());

// anexa as rotas que foram criadas no arquivo rotas
app.use(routes);

// configurações de inicio da aplicação (escolher a porta e fazer algo a mais como mensagens)
app.listen(3030, () => {
    console.log('Acessar http://localhost:3030');
    console.log('Servidor exec na port 3030');
});

