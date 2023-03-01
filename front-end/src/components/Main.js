// imports
import React, { Component } from "react";
import Tabela from './Tabela'
import axios from 'axios'
import './Main.css';

// componente principal da aplicação
class Main extends Component {
  // variavel que armazena o estado
  state = {
    // array para armazenar os usuarios
    usuarios:[],
  }

  // executado logo após um componente ser montado
  componentDidMount() {
    // faz uma requisição get no servidor back-end para buscar os dados dos usuarios
    axios.get('http://localhost:3030/').then(response => {
      // se der certo
      // coloca os dados na varivel usuarios dentro do state 
      this.setState({ usuarios: response.data});
    }).catch(error => {
      // se der errado
      // printa o erro no console 
      console.log(error);
    });
  }

  // renderiza o componente
  render() {
    // pega a variavel usuarios dentro do state
    const {  usuarios } = this.state;

    // retorna o jsx que ira ser renderizado
    return (
      <div className="main">
        <h1>Lista de Usuarios</h1>
        {/* componete tabela que esta recebendo os dados dos usuarios  */}
        <Tabela 
        users={usuarios}/>
      </div>
    );
  }
}

// exports
export default Main;