import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux'
//import { login } from '../../redux/user.redux'
 
@connect( 
  (state)=>{
    console.log("state.user....",state.user)
    return state.user
  },{

  }
)
class Login extends Component {
    render(){
        return (
            <Fragment>
              <div>
                获取数据为：{this.props.name}
              </div>
            </Fragment>  
        )
    }
}
export default Login