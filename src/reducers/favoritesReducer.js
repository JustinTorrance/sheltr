export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
    console.log('adding')
      return [...state, action.pet]
    case 'REMOVE_FAVORITE':
    console.log('gone')
      return state.filter(pet => (pet !== action.pet))
    default:
      return state
  }
}