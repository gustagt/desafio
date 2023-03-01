// modelo usuario 
// importa o axios
const axios = require('axios');

// exporta a função lista usuarios
exports.listarUsuarios = () => {
    // faz uma requisição get em uma url
    // retorna a respota da requisição, sendo os dados esperados ou um erro
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            // caso a requisição funcione
            // ordena em ordem alfabetica o array recebido
            ordenacao = response.data.sort((a, b) => a.name.localeCompare(b.name))
            // separa os 5 primeiros indices do array apos serem ordenados 
            resultado = ordenacao.slice(0,5)
            // retorna o array como string
            return JSON.stringify(resultado)
        })
        .catch(function (error) {
            // caso de errado retorna o erro
            return error
        });
};