import { fetchShelters }  from '../actions/index'

const API_KEY = `${process.env.REACT_APP_API_KEY}`

export const findShelters = (city) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?key=' + API_KEY + '&location=' + city + '&format=json&output=full&count=5')
      const shelters = await response.json()
      dispatch(fetchShelters(shelters))
    } catch(error) {
      console.log(error.message)
    }
  }
}
