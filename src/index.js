import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';  
import thunk from 'redux-thunk';

import App from './_Components/App';
import reducers from './_Redux/reducers';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(

  <Provider store={store} >
    <App />
  </Provider>
  
  , document.getElementById('root'));
