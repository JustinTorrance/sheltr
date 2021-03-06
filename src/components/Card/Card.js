import React, { Component } from 'react'
import { connect } from 'react-redux'
import './_Card.scss'
import { addFavorite, removeFavorite } from '../../actions'

export class Card extends Component {
  constructor() {
    super()
    this.state = {
      favorite: false
    }
  }

  toggleFavorite = (e) => {
    const pet = this.props.petsFromShelter.find(pet => {
      return e.target.parentNode.id === pet.id
    })
    if (this.props.favorites.includes(pet)) {
      this.props.removeFavorite(pet)
    } else if (!this.props.favorites.includes(pet)) {
      this.props.addFavorite(pet)
    }
    this.setState({favorite: !this.state.favorite}) 
  }

  render() {
    return (
      <article className='pet-wrapper' id={this.props.id}>
        <img className='pet-photo' src={this.props.photo} />
        <h2 className='pet-name'>{this.props.name}</h2>
        <p className='pet-size'>Size: {this.props.size}</p>
        <p className='pet-age'>Age: {this.props.age}</p>
        <p className='pet-sex'>Sex: {this.props.sex}</p>
        <i className={this.state.favorite ? 'fas fa-heart heart-icon-active' : 'fas fa-heart heart-icon'} onClick={this.toggleFavorite}></i>
      </article>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card)