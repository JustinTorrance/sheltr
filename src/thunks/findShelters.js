import { fetchShelters }  from '../actions/index'

export const findShelters = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      const shelters = await response.json()
      console.log('SHELTERS', shelters)
      dispatch(fetchShelters(shelters))
    } catch(error) {
      console.log(error.message)
    }
  }
}