export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.pet]
    case 'REMOVE_FAVORITE':
      return state.filter(pet => (pet !== action.pet))
    default:
      return state
  }
}