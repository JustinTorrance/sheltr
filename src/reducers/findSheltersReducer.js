const findSheltersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SHELTERS':
      console.log('REDUCER')
      const shelters = action.shelters.petfinder.shelters.shelter.map(shelter => (shelter.name))
      console.log('REDUCER', shelters)
      return [...state, ...shelters]
    default:
    return state
  }
}

export default findSheltersReducer