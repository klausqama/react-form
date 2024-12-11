import React from 'react'; // Importa la libreria React
import ReactDOM from 'react-dom'; // Importa il modulo ReactDOM per manipolare il DOM
import App from './App'; // Importa il componente principale App

// Renderizza il componente App all'interno dell'elemento con id 'root' nel DOM
ReactDOM.render(
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);