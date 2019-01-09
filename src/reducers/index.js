import { combineReducers } from 'redux'
import findSheltersReducer from './findSheltersReducer'
import fetchPetsByShelterReducer from './fetchPetsByShelterReducer'
import { favoritesReducer } from './favoritesReducer'

const rootReducer = combineReducers({
  shelters: findSheltersReducer,
  petsFromShelter: fetchPetsByShelterReducer,
  favorites: favoritesReducer
})

export default rootReducer