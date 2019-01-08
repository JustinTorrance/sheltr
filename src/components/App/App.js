import React, { Component } from 'react'
import * as API from '../../utils/apiCalls'
import Results from '../Results/Results'
import { connect } from 'react-redux'
import { findShelters } from '../../thunks/findShelters'
import { Route, Switch, Link } from 'react-router-dom'
import Shelter from '../Shelter/Shelter'
import './_App.scss'



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
      <main className="App">
        <div className='input-wrapper'>

          <h1 className='title'>SHELTR</h1>
          <p className='begin'>To begin, find a shelter near you</p>
          <form onSubmit={this.handleSubmit}>
            <input
              className='city-input'
              onChange={this.handleChange}
              type='text'
              placeholder='zip code'
              value={this.state.city}
              name='city'
            />
            <Link to={'/results'}>
              <button className='enter-btn' onClick={this.handleSubmit}>Enter</button>
            </Link>
          </form>
        </div>
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
      </main>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  findShelters: (city) => dispatch(findShelters(city)),
})

export default connect(null, mapDispatchToProps)(App)