import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './_Components/App';

import reducers from './_Redux/reducers';

ReactDOM.render(
  
  <Provider store={createStore(reducers)} >
    <App />
  </Provider>
  
  , document.getElementById('root'));
