import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { add, remove, addAsync } from '@/redux/actions';
import './App.less';
@connect(
  state => state.counter,
  { add, remove, addAsync }
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.num}</p>
        <Button onClick={() => this.props.add()}>add</Button>
        <Button onClick={() => this.props.remove()} >remove</Button>
        <Button onClick={() => this.props.addAsync()} >异步add</Button>
      </div>
    );
  }
}

export default App;
