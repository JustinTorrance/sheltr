import { combineReducers } from 'redux'
import findSheltersReducer from './findSheltersReducer'

const rootReducer = combineReducers({
  shelters: findSheltersReducer
})

export default rootReducer