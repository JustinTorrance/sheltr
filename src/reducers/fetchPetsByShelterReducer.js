const fetchPetsByShelterReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PETS':
      const pets = action.shelters.petfinder.shelters.shelter.map(shelter => (shelter))
      return [...state, ...pets]
    default:
    return state
  }
}

export default fetchPetsByShelterReducer;