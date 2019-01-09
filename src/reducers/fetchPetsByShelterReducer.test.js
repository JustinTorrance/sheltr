import fetchPetsByShelterReducer from './fetchPetsByShelterReducer'

describe('fetchPetsByShelterReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = fetchPetsByShelterReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return state with an array of pet objects', () => {
    const expected = [{
          id: 1,
          name: 'fluffy',
          size: 'L',
          age: 'adult',
          sex: 'm',
          photo: 'img'
        }]
    const mockAction = {
      type: 'FETCH_PETS',
      pets: [{
          id: 1,
          name: 'fluffy',
          size: 'L',
          age: 'adult',
          sex: 'm',
          photo: 'img'
        }]
      }
    const result = fetchPetsByShelterReducer(undefined, mockAction)
    expect(result).toEqual(expected)
  })
})