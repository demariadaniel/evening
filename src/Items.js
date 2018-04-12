import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';

class Items extends Component {
  componentDidMount(){
    axios.post('http://localhost:8080/auth', queryString.parse(this.props.location.search))
  }
  render(){
    const {items} = this.props;
    return (
      <div>
        <button
          className="button button-primary"
          onClick={this.props.add}>
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
      )
    }    
}

export default Items;