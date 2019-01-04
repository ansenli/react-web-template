import {handleActions} from 'redux-actions'

// reducer
const initState = {
  num: 1,
  name: '张三'
}

export default handleActions({
  ADD_NUM(state,action){
    return {
      ...state,
      num: state.num + 1
    };
  },
  SET_NAME(state,action){
    console.log("action...",action)
    return {
      ...state,
      name: action.payload.name
    }
  }
},initState)