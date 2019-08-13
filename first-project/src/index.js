// importer nos dépendances

import React from 'react';  // on importe la bibliothéque réact qui se trouve dans le package json
import ReactDOM from 'react-dom'; // on importe la bibliotheque réactdom
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root')); // ici pour le rendu on demande au dom virtuelle de react d'appliquer  l'app.js dans l'id
// root de l'index.html

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

