import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';

class _App extends Component {
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
  componentDidMount(){
    axios.get('http://localhost:8080/auth')
      .then(res =>{
        console.log(res.data)
        if (res.data.loggedIn) {
          this.props.history.push('/spotify')
        } else {
          localStorage.auth = res.data;
          window.location = `https://accounts.spotify.com/authorize/?client_id=${res.data.id}&response_type=code&redirect_uri=http://localhost:3000/spotify`
        }
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
          {localStorage.auth ?
            null :
            <div>
              <button className="button button-primary"
                onClick={this.auth}>
                Login
              </button>
            </div>
          }
        <Switch>
        <Route path="/spotify"
          render={()=>(
            <div>
              <button
                className="button button-primary"
                onClick={this.add}>
                  Add an Item
              </button>
              <div className="items">
                {items.map((item)=>(
                  <div className="item">
                    {item}
                  </div>
                  )
                )}
              </div>
            </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(_App);
