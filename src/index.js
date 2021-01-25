import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware,createStore} from 'redux';
import {Provider} from 'react-redux'
import Reducer from './Reducer'

import ReduxPromise from 'redux-promise'
import App from './App';
import reportWebVitals from './reportWebVitals';
const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducer)}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
