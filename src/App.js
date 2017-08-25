import React, { Component } from 'react';
import logo from './logo.svg';
import { Input, Select, Icon } from 'antd';
import './App.css';

ReactDOM.render(
  <div className="example-input">
    <Input size="large" placeholder="Username" />
    <Input size="large" placeholder="Password" />
  </div>
, mountNode);
.example-input .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
