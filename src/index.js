import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


ReactDOM.render((
  <BrowserRouter>
    <App />  
  </BrowserRouter>
), document.getElementById('root'));

