import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import { fetchPetsByShelter } from '../../thunks/fetchPetsByShelter'


const Results = (props) => {

  const handleClick = (e) => {
    const clickedShelter = props.shelters.find(shelter => {
      const shelterName = e.target.innerText
      return shelter.name.$t === shelterName
    })
    props.fetchPetsByShelter(clickedShelter.id.$t)
  }

  const shelters = props.shelters.map(shelter => {
    console.log('this', this)
    return <li onClick={handleClick}>{shelter.name.$t}</li>
  })

  return(
    <ul>
       { shelters }
    </ul>
  )
}

export const mapStateToProps = (state) => ({
  shelters: state.shelters
})

export const mapDispatchToProps = (dispatch) => ({
  fetchPetsByShelter: (shelterID) => dispatch(fetchPetsByShelter(shelterID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)