import React, { Component } from 'react';
import * as API from '../../utils/apiCalls'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      city: ''
    }
  }


  handleChange = async (e) => {
    const { name, value } = e.target
    await this.setState({
      [name]: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    API.findShelter(this.state.city)
  }

  render() {
    return (
      <div className="App">
        <h1>SHELTER</h1>
        <p>To begin, find a shelter near you</p>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type='text'
            placeholder='zip or city'
            value={this.state.city}
            name='city'
          />
          <button>Enter</button>
        </form>
      </div>
    );
  }
}

