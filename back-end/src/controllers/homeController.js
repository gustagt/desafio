const users = require('../models/users');

// função assincrona que lista os usuarios tratdos da api
exports.usuarios = (req, res) => {
    users.listarUsuarios()
    .then(resultado => res.send(resultado))
    .catch(error => {
        console.error(error);
        res.status(500).send('Erro ao carregar usuários');
    });
    
}