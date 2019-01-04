import React, { PureComponent,Fragment } from 'react';

class Stu extends PureComponent{
  render(){
    return (
      <Fragment>
        <div>
          状态机num值，{this.props.stuRedux.num}
        </div>
        <button onClick={this.add} >
          状态机num值+1
        </button>
        <div>
          状态机name值，{this.props.stuRedux.name}
        </div>
        <div>
          状态机name值input输入框：
          <input type='text' ref="sname" ></input>
        </div>
        <button onClick={this.setName} >
          状态机name值修改
        </button>
      </Fragment>
    )
  }
  add=()=>{
  	this.props.ADD_NUM();
  }
  setName=(e)=>{
  	this.props.SET_NAME(this.refs.sname.value);
  }
  componentDidMount() {
	  console.log(this)
  }
}

export default Stu