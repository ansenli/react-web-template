import {
  handleActions
} from 'redux-actions'
import {
  ASYNC_ADDNUM,
  ASYNC_SETNAME
} from '../types/user'
const defaultState = {
  num: 1,
  name: '张三'
}
export default handleActions({
  [ASYNC_ADDNUM](state, action) {
    return {
      ...state,
      num: state.num + 1
    };
  },
  [ASYNC_SETNAME](state, action) {
    console.log("action...", action)
    return {
      ...state,
      name: action.payload.name
    }
  }
}, defaultState)