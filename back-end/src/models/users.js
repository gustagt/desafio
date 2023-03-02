const axios = require('axios');

exports.listarUsuarios = () => {
  
    // retorna a respota da requisição
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            
            // ordena o array recebido
            ordenacao = response.data.sort((a, b) => a.name.localeCoparme(b.name))
            // separa os 5 primeiros indices do array 
            resultado = ordenacao.slice(0,5)
            return JSON.stringify(resultado)
        })
        .catch(function (error) {
            return error
        });
};