import findSheltersReducer from './findSheltersReducer'

describe('findSheltersReducer', () => {
  it('should return initial state', () => {
    const expected = []
    const result = findSheltersReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return new state with an array of shelters', () => {
    const expected = [{shelter: 'new shelter'}]
    const mockAction = {
      type: 'FETCH_SHELTERS',
      shelters: [{shelter: 'new shelter'}]
    }
    const result = findSheltersReducer(undefined, mockAction)
    expect(results).toEqual(expected)

  })
})