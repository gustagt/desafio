// imports
const express = require('express');
const route = express.Router();
// imports controllers
const homeController = require('../src/controllers/homeController');

// definição de rotas (caminho, função do controller)
route.get('/', homeController.usuarios);

// exportação do modulo
module.exports = route;
