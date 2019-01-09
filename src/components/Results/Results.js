import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import { fetchPetsByShelter } from '../../thunks/fetchPetsByShelter'
import './_Results.scss'

const Results = (props) => {

  const handleClick = async (e) => {
    const clickedShelter = props.shelters.find(shelter => {
      const shelterName = e.target.innerText
      return shelter.name.$t === shelterName
    })
    await props.fetchPetsByShelter(clickedShelter.id.$t)
  }

  const shelters = props.shelters.map(shelter => {
    return  <Link to='/shelter'>
              <li className='shelter-li' onClick={handleClick}>{shelter.name.$t}</li>
            </Link>
  })

  return(
    <ul className='shelter-list'>
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