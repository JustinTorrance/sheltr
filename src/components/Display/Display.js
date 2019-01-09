import React from 'react'
import { connect } from 'react-redux'
import './_Display.scss'
import { addFavorite, removeFavorite } from '../../actions'
import Card from '../Card/Card.js'
import { Link } from 'react-router-dom'

export const Display = (props) => {

  return (
    <section className='pets-results'>
      <Link to='/favorites'>
        <button>View Favorites</button>
      </Link>
      <h3 className='shelter-name'>Pets Available At This Shelter</h3>
      <section className='pets-grid'>
        {
          props.petsFromShelter.map(pet => {
            return (
              <Card {...pet} />
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