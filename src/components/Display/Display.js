import React, { Component } from 'react'
import { connect } from 'react-redux'
import './_Shelter.scss'
import { addFavorite, removeFavorite } from '../../actions'

export class Shelter extends Component {
  constructor() {
    super()
    this.state = {
      favorites: []
    }
  }

  toggleFavorite = (e) => {
    var petID = e.target.parentNode.id
    if (this.props.favorites[0]) {
      this.props.favorites.find((pet) => {
        console.log('find')
        if (petID === pet.id) {
          console.log('remove')
          this.props.removeFavorite(pet)
        }
      })
    } else {
      console.log('add')
      this.props.petsFromShelter.map(pet => {
        if (pet.id === petID) {
          this.props.addFavorite(pet)
        }
      }) 
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
                <article className='pet-wrapper' id={pet.id}>
                  <img className='pet-photo' src={pet.photo} />
                  <h2 className='pet-name'>{pet.name}</h2>
                  <p className='pet-size'>Size: {pet.size}</p>
                  <p className='pet-age'>Age: {pet.age}</p>
                  <p className='pet-sex'>Sex: {pet.sex}</p>
                  <i className='fas fa-heart' onClick={this.toggleFavorite}></i>
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
  petsFromShelter: state.petsFromShelter,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (pet) => dispatch(addFavorite(pet)),
  removeFavorite: (pet) => dispatch(removeFavorite(pet))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shelter)