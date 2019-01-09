export const fetchShelters = (shelters) => ({
  type: 'FETCH_SHELTERS',
  shelters
})

export const fetchPets = (pets) => ({
  type: 'FETCH_PETS',
  pets
})

export const addFavorite = (pet) => ({
  type: 'ADD_FAVORITE',
  pet
})

export const removeFavorite = (pet) => ({
  type: 'REMOVE_FAVORITE',
  pet
})