import React, { Component } from 'react'
import { connect } from 'react-redux'


export class Shelter extends Component {
  constructor() {
    super()
    this.state = {
      favorites: []
    }
  }


  render() {
    return (
      <div>
        {
          this.props.petsFromShelter.map(pet => {
            return (
              <div>
                <p>{pet.name}</p>
                <p>Size: {pet.size}</p>
                <p>Age: {pet.age}</p>
                <p>Sex: {pet.sex}</p>

              </div>
            )            
          })          
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  petsFromShelter: state.petsFromShelter
})

export default connect(mapStateToProps)(Shelter)