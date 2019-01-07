import React, { Component } from 'react'
import * as API from '../../utils/apiCalls'
import Results from '../Results/Results'
import { connect } from 'react-redux'
import { findShelters } from '../../thunks/findShelters'
import { Route, Switch } from 'react-router-dom'


export class App extends Component {
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
    this.props.findShelters(this.state.city)

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
            placeholder='zip code'
            value={this.state.city}
            name='city'
          />
          <button>Enter</button>
        </form>
        <Switch>
          <Route 
            exact
            path='/results' 
            component={Results}    
          />
        </Switch>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  findShelters: (url) => dispatch(findShelters(url)),
})

export default connect(null, mapDispatchToProps)(App)