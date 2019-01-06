import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {
  Provider
} from 'react-redux';
// 添加拦截器
import './config/interceptors';
import * as serviceWorker from './serviceWorker';
import configStore from './store'
const store = configStore(); // 这一行还不能省略
ReactDOM.render( 
<Provider  store ={store}>
  < App></App>
</Provider>, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();