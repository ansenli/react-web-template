import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {
  createStore,
  applyMiddleware
} from 'redux';
import {
  Provider
} from 'react-redux';
import promiseMiddleware from 'redux-promise'

// reducers 状态树state和逻辑操作对于数据的操作最好都放在reducers模块
import rootRedux from './rootRedux.js';
import * as serviceWorker from './serviceWorker';
// 生成状态树
const store = createStore(rootRedux,applyMiddleware(promiseMiddleware))
console.log("store....", store)

ReactDOM.render( 
<Provider  store ={store}>
  < App></App>
</Provider>, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();