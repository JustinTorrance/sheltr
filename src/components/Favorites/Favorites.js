import React from 'react'
import { connect } from 'react-redux'
import './_Favorites.scss'
import { addFavorite, removeFavorite } from '../../actions'
import Card from '../Card/Card.js'
import { Link } from 'react-router-dom'

export const Favorites = (props) => {

  return (
    <section className='pets-results'>
      <h3 className='shelter-name'>Favorites</h3>
      <Link to='/display'>
        <button className='shelter-btn change-view'>Back to Shelter</button>
      </Link>
      <section className='pets-grid'>
        {
          props.favorites.map(favorite => {
            return (
              <Card {...favorite} />
            )            
          })          
        }
      </section>
    </section>
  )
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (pet) => dispatch(addFavorite(pet)),
  removeFavorite: (pet) => dispatch(removeFavorite(pet))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)