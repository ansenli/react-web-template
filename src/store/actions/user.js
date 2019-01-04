import {
  createAction
} from 'redux-actions'
import {
  ASYNC_ADDNUM,
  ASYNC_SETNAME
} from '../types/user'
import {
  addNum,
  setNum
} from '@api/user'
// 调用后端接口
const action_addNum = async function(params){
  const jsonData = await addNum({
    query:params,
    method:'GET'
  })
  if(jsonData.statusCode = 200){
    return jsonData;
  }else {
    return false;
  }
};
const action_setNum = async function(params){
  const jsonData = await setNum({
    query:params,
    method:'POST'
  })
  if(jsonData.statusCode = 200){
    return jsonData;
  }else {
    return false;
  }
};

// 对外暴露的action方法
export const asyncAddNum = createAction(ASYNC_ADDNUM, (params) => {
  return action_addNum(params)
});
export const asyncSetNum = createAction(ASYNC_SETNAME, (params) => {
  return action_setNum(params)
});