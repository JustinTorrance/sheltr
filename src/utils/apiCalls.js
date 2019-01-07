const API_KEY = `${process.env.REACT_APP_API_KEY}`

export const findShelter = async (city) => {
  try {
    const response = await fetch('https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?key=' + API_KEY + '&location=' + city + '&format=json&output=full')
    const shelter = await response.json()
    console.log(shelter)
    return shelter
  } catch(error) {
    console.log('ERROR:', error.message)
    throw new Error()
  }
}