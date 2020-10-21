import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// імпортуємо роутер, а перед тим встановлюємо пакет командою npm add react-router-dom
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// створюємо зміну
const app  = (
  // тепер огортаємо увесь наш додаток в даний компонент
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
// в ReactDOM.render складуєм змінну app
ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
