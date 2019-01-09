import React, { Component } from 'react'
import { connect } from 'react-redux'
import './_Shelter.scss'

export class Shelter extends Component {
  constructor() {
    super()
    this.state = {
      favorites: []
    }
  }

  render() {
    return (
      <section className='pets-results'>
        <h3 className='shelter-name'>Boulder County Shelter</h3>
        <section className='pets-grid'>
          {
            this.props.petsFromShelter.map(pet => {
              return (
                <article className='pet-wrapper'>
                  <img className='pet-photo' src={pet.photo} />
                  <h2 className='pet-name'>{pet.name}</h2>
                  <p className='pet-size'>Size: {pet.size}</p>
                  <p className='pet-age'>Age: {pet.age}</p>
                  <p className='pet-sex'>Sex: {pet.sex}</p>
                  <
                </article>
              )            
            })          
          }
        </section>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  petsFromShelter: state.petsFromShelter
})

export default connect(mapStateToProps)(Shelter)