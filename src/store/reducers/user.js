import {
  handleActions
} from 'redux-actions'
import {
  ADD_NUM,
  SET_NAME
} from '../types/user'
const defaultState = {
  num: 1,
  name: '张三'
}
export default handleActions({
  [ADD_NUM](state, action) {
    return {
      ...state,
      num: state.num + 1
    };
  },
  [SET_NAME](state, action) {
    console.log("action...", action)
    return {
      ...state,
      name: action.payload.name
    }
  }
}, defaultState)