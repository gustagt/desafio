// controller principal
const users = require('../models/users');

// função assincrona que lista os usuarios tratdos da api
exports.usuarios = async (req, res) => {
    // tenta executar 
    try {
        const resultado = await users.listarUsuarios();
        res.send(resultado);
    }
    // caso de errado
    catch (error) {
        // printa o erro no console
        console.error(error);
        // responde com condigo de status 500 e uma mensagem
        res.status(500).send('Erro ao carregar usuários');
    }
}