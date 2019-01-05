import { createStore,applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';

console.log("rootReducer...",rootReducer)

export default function configStore() {
  const store = createStore(rootReducer,applyMiddleware(promiseMiddleware))
  return store;
}