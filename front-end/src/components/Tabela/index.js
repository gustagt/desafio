// imports
import React from "react";
import PropTypes from 'prop-types'
import './Tabela.css'

// exporta o componente
export default function Tabela({users}){
  // retorna o jsx que vai ser renderizado
  return (
    <table>
      <thead>
        {/* cabeçalho */}
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      {/* corpo da tabela */}
      <tbody>
        {/* faz um mapa com o array recebido e monta uma tabela */}
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// define q a variavel users recebido no componente seja um array
Tabela.propTypes = {
  users: PropTypes.array.isRequired,
}