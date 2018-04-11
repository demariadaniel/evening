import React, { Component } from 'react';
import {Route, Switch} from 'react-router';
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
          <h1 className="App-title">Spotify</h1>
        </header>
        <div>
          <button
            onClick={this.add}>
              Add an Item
          </button>
        </div>
        <Switch>
        <Route path="/spotify"
          render={()=>(
            <div className="items">
              {items.map((item)=>(
                <div className="item">
                  {item}
                </div>
                )
              )}
            </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
