import { favoritesReducer } from './favoritesReducer'

describe('favoritesReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = favoritesReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return state with a new favorite', () => {
    const expected = [{name: 'fluffy'}]
    const mockAction = {
      type: 'ADD_FAVORITE',
      pet: {name: 'fluffy'}
    }
    const result = favoritesReducer(undefined, mockAction)
    expect(result).toEqual(expected)
  })
  it('should return state without a favorite', () => {
    const expected = []
    const mockAction = {
      type: 'REMOVE_FAVORITE',
      pet: {name: 'fluffy'}
    }
    const result = favoritesReducer(undefined, mockAction)
    expect(result).toEqual(expected)
  })
})