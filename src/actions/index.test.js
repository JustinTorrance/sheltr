import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of FETCH_SHELTERS', () => {
    const shelters = [{name: 'Boulder'}]
    const expectedAction = {
      type: 'FETCH_SHELTERS',
      shelters: [{name: 'Boulder'}]
    }
    const result = actions.fetchShelters(shelters)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of FETCH_PETS', () => {
    const pets = [{name: 'fluffy'}]
    const expectedAction = {
      type: 'FETCH_PETS',
      pets: [{name: 'fluffy'}]
    }
    const result = actions.fetchPets(pets)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of ADD_FAVORITE', () => {
    const pet = [{name: 'fluffy'}]
    const expectedAction = {
      type: 'ADD_FAVORITE',
      pet: [{name: 'fluffy'}]
    }
    const result = actions.addFavorite(pet)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of REMOVE_FAVORITE', () => {
    const pet = [{name: 'fluffy'}]
    const expectedAction = {
      type: 'REMOVE_FAVORITE',
      pet: [{name: 'fluffy'}]
    }
    const result = actions.removeFavorite(pet)
    expect(result).toEqual(expectedAction)
  })
})