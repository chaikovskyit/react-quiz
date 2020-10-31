import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// імпортуємо роутер, а перед тим встановлюємо пакет командою npm add react-router-dom
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// імпортуємо функцію "createStore" для створення "store", і "compose" для "DevTools"
import {createStore, compose, applyMiddleware} from 'redux'
// імпортуємо hoc "Provider" для того щоб огорнути наш додаток
import {Provider} from 'react-redux'
// підключаємо наш rootReducer і передаємо його в якості параметра в функцію "createStore()"
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'


// Підключаємо "DevTools"
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


// Створюємо "store"
const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
  
  )



// створюємо зміну
const app  = (
  // огортаємо наш додаток в <Provider/> і передаємо йому "store"
  <Provider store={store}>
    {/* тепер огортаємо увесь наш додаток в <BrowserRoute/> компонент */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  
)
// в ReactDOM.render складуєм змінну app
ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
