import React, { Component } from 'react'
import * as API from '../../utils/apiCalls'
import Results from '../Results/Results'
import { connect } from 'react-redux'
import { findShelters } from '../../thunks/findShelters'
import { Route, Switch, Link } from 'react-router-dom'
import Shelter from '../Shelter/Shelter'


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

  handleSubmit = async () => {
    await this.props.findShelters(this.state.city)
  }

  render() {
    return (
      <div className="App">
        <h1>SHELTR</h1>
        <p>To begin, find a shelter near you</p>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type='text'
            placeholder='zip code'
            value={this.state.city}
            name='city'
          />
          <Link to={'/results'}>
            <button onClick={this.handleSubmit}>Enter</button>
          </Link>
        </form>
        <Switch>
          <Route 
            exact
            path='/results' 
            component={Results}    
          />
          <Route
            exact
            path='/shelter'
            component={Shelter}
          />
        </Switch>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  findShelters: (city) => dispatch(findShelters(city)),
})

export default connect(null, mapDispatchToProps)(App)