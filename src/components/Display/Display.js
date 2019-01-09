import React, { Component } from 'react'
import { connect } from 'react-redux'
import './_Display.scss'
import { addFavorite, removeFavorite } from '../../actions'

export const Display = (props) => {

  const toggleFavorite = (e) => {
    var petID = e.target.parentNode.id
    if (props.favorites[0]) {
      props.favorites.find((pet) => {
        if (petID === pet.id) {
          props.removeFavorite(pet)
        }
      })
    } else {
      props.petsFromShelter.map(pet => {
        if (pet.id === petID) {
          props.addFavorite(pet)
        }
      }) 
    }    
  }

  return (
    <section className='pets-results'>
      <h3 className='shelter-name'>Boulder County Shelter</h3>
      <section className='pets-grid'>
        {
          props.petsFromShelter.map(pet => {
            return (
              <article className='pet-wrapper' id={pet.id}>
                <img className='pet-photo' src={pet.photo} />
                <h2 className='pet-name'>{pet.name}</h2>
                <p className='pet-size'>Size: {pet.size}</p>
                <p className='pet-age'>Age: {pet.age}</p>
                <p className='pet-sex'>Sex: {pet.sex}</p>
                <i className='fas fa-heart' onClick={toggleFavorite}></i>
              </article>
            )            
          })          
        }
      </section>
    </section>
  )
}


export const mapStateToProps = (state) => ({
  petsFromShelter: state.petsFromShelter,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (pet) => dispatch(addFavorite(pet)),
  removeFavorite: (pet) => dispatch(removeFavorite(pet))
})

export default connect(mapStateToProps, mapDispatchToProps)(Display)