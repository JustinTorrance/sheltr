const fetchPetsByShelterReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PETS':
      const pets = action.pets.petfinder.pets.pet.map(pet => (pet))
      return [...state, ...pets]
    default:
    return state
  }
}

export default fetchPetsByShelterReducer;