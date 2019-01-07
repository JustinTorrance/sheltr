import { fetchPets }  from '../actions/index'

const API_KEY = `${process.env.REACT_APP_API_KEY}`

export const fetchPetsByShelter = (shelterID) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.getPets?key=' + API_KEY + '&id=' + shelterID + '&format=json&output=full')
      const pets = await response.json()
      console.log('pets', pets)
      dispatch(fetchPets(pets))
    } catch(error) {
      console.log(error.message)
    }
  }
}
