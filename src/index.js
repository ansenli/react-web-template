import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {
  Provider
} from 'react-redux';
import {HashRouter,Route,Switch} from 'react-router-dom';
// BrowserRouter  真实的路径地址 http://localhost:3000/user 
// HashRouter hash路径 http://localhost:3000/user  
// 添加拦截器
import './config/interceptors';
import * as serviceWorker from './serviceWorker';
import configStore from './store';

import Login from './container/login';
import Register from './container/register';
import User from './container/user';

const store = configStore(); // 这一行还不能省略
ReactDOM.render( 
<Provider  store ={store}>
  <HashRouter>
    <Switch>
      <Route path='/' exact component={Login} ></Route>
      <Route path='/register' component={Register} ></Route>
      <Route path='/user' component={User} ></Route>
    </Switch>
  </HashRouter>
  <App></App>
</Provider>, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();