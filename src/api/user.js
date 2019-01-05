
import {unifyRequest} from '@/utils/request.js'

const mainUrl = 'https://www.easy-mock.com/mock/5bfd0016e14e0125f051fe12/fmc-admin-web/';
const numUrl = mainUrl + 'fmc-admin-web/v1/reservation/getAll'

// add 
// const addNum = (params)=>unifyRequest(params,numUrl+'/addNum123')
const addNum = (params)=>unifyRequest(params,numUrl)

// add 
const setNum = (params)=>unifyRequest(params,numUrl+'/setNum123')

export {
  addNum,
  setNum
}