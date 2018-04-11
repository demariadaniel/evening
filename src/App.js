import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    items : [1,2,3]
  }
  add =()=>{
    this.setState({
      items: this.state.items.concat([
        this.state.items.length+1
      ])
    })
  }
  render() {
    let {items} = this.state
    console.log(items)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <button
            onClick={this.add}>
              Add an Item
          </button>
        </div>
        <div className="App-intro">
          {items.map((item)=>(
            <div className="item">
              {item}
            </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default App;
