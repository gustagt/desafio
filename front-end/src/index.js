// imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// cria um objeto root
const root = ReactDOM.createRoot(document.getElementById('root'));

// renderiza o que tiver dentro
root.render(
  <React.StrictMode>
    {/* App referencia a nossa aplicação */}
    <App />
  </React.StrictMode>
);


