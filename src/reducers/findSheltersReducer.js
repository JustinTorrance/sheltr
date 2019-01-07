const findSheltersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SHELTERS':
      const shelters = action.shelters.petfinder.shelters.shelter.map(shelter => (shelter))
      return [...state, ...shelters]
    default:
    return state
  }
}

export default findSheltersReducer