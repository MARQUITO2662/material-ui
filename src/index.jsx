// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import 'primereact/resources/themes/saga-blue/theme.css'; // Tema elegido
import 'primereact/resources/primereact.min.css';         // Estilos básicos de PrimeReact
import 'primeicons/primeicons.css';                       // Iconos de PrimeReact

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
