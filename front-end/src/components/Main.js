import React, { Component } from "react";
import Tabela from './Tabela'
import axios from 'axios'
import './Main.css';


class Main extends Component {

  state = {
    // array armazena os usuarios
    usuarios:[],
  }

  componentDidMount() {
    // requisição no servidor back-end para buscar os dados dos usuarios
    axios.get('http://localhost:3030/').then(response => {
      this.setState({ usuarios: response.data});
    }).catch(error => {
      console.log(error);
    });
  }


  render() {
    const {  usuarios } = this.state;

    return (
      <div className="main">
        <h1>Lista de Usuarios</h1>
        <Tabela 
        users={usuarios}/>
      </div>
    );
  }
}

export default Main;