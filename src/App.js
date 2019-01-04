import React, { Component } from 'react';
import './App.scss';
import StuReactRedux from "./pages/StuReactRedux";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StuReactRedux></StuReactRedux>
        </header>
      </div>
    );
  }
}
export default App;
