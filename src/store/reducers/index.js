import { combineReducers } from 'redux';
import user from './user';

export default combineReducers({
  user,
})


// import { combineReducers } from 'redux';

// // 子的reducer
// import stuRedux from './store/stuRedux.js'

// // 合并 相关reducer

// let rootRedux = combineReducers({
//   stuRedux,
// })

// export default rootRedux