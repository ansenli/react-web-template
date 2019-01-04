import {connect} from 'react-redux'

import {createAction} from 'redux-actions'
// 引入组件

import Stu from './Stu'

// react-redux 封装组件

// 确定哪些Redux 全局state 是我们组件想要通过props获取的？

function mapStateToProps(state){
  return {
    stuRedux:state.stuRedux
  }
}

function mapDispatchToProps(dispatch) {
  return {
     ADD_NUM:()=>{
      let activet = createAction("ADD_NUM",()=>{
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 1000);
        })
      })
      console.log(activet())
      dispatch(activet()) 
    },
    SET_NAME:(val)=>{
      dispatch({type:"SET_NAME",payload:{name:val}})
    }
  }
}

// 封装传递state和dispatch
let StuReactRedux = connect(mapStateToProps,mapDispatchToProps)(Stu)

export default StuReactRedux