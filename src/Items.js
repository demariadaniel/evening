import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';

class Items extends Component {
  componentDidMount(){
    // console.log(this.props)
    console.log(queryString.parse(this.props.location.search))
    // axios.post('http://localhost:8080/auth', {})
  }
  render(){
    const {items} = this.props;
    return (
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
      )
    }    
}

export default Items;