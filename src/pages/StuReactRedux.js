import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux'
//import { login } from '../../redux/user.redux'
import {asyncAddNum,asyncSetNum} from '@/store/actions/user'
 
@connect( 
  (state)=>{
    console.log("state.user....",state.user)
    return state.user
  },{
    asyncAddNum,
    asyncSetNum
  }
)
class Login extends Component {
    render(){
        return (
            <Fragment>
              <div>
                获取数据为：{this.props.num}
              </div>
              <button onClick={this.addNumTap} >加一哈哈</button>
            </Fragment>  
        )
    }
    addNumTap=()=>{
      this.props.asyncAddNum()
    }

}
export default Login