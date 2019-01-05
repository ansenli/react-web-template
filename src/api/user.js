
import {unifyRequest} from '@/utils/request.js'

const mainUrl = 'locallost:8080';
const numUrl = mainUrl + '/addNum'

// add 
// const addNum = (params)=>unifyRequest(params,numUrl+'/addNum123')
const addNum = (params)=>{
  console.log("add...",params)
  return '100'
}

// add 
const setNum = (params)=>unifyRequest(params,numUrl+'/setNum123')

export {
  addNum,
  setNum
}