
const express = require('express');
const route = express.Router();

const homeController = require('../src/controllers/homeController');

// definição de rotas (caminho, função do controller)
route.get('/', homeController.usuarios);


module.exports = route;
