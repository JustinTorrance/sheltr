import { combineReducers } from 'redux'
import findSheltersReducer from './findSheltersReducer'
import fetchPetsByShelterReducer from './fetchPetsByShelterReducer'

const rootReducer = combineReducers({
  shelters: findSheltersReducer,
  petsFromShelter: fetchPetsByShelterReducer
})

export default rootReducer