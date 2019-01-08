const fetchPetsByShelterReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PETS':
      const pets = action.pets.petfinder.pets.pet.map(pet => {
        return {
          id: pet.id.$t,
          name: pet.name.$t,
          size: pet.size.$t,
          age: pet.age.$t,
          sex: pet.sex.$t
        }
      })
      return [...state, ...pets]
    default:
    return state
  }
}

export default fetchPetsByShelterReducer;