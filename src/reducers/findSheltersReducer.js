const findSheltersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SHELTERS':
      const shelters = shelters.petfinder.shelters.shelter.map(shelter => {
        return {
          name: shelter.name
        }
      })
      return [...state, ...shelters]
    default:
    return state
  }
}

export default findSheltersReducer