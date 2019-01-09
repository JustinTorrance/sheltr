import { fetchPetsByShelter } from './fetchPetsByShelter'
import { fetchPets }  from '../actions/index'

const API_KEY = `${process.env.REACT_APP_API_KEY}`
const shelterID = 'C0469'
const city = '80305'

describe('fetchPetsByShelter', () => {
  it('should dispatch fetchPets', async () => {
    const mockPets = [{name: 'fluffy'}, {name: 'bigsby'}]
    const mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        pets: mockPets
      })
    }))
    const mockUrl = 'https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.getPets?key=' + API_KEY + '&id=' + shelterID + '&format=json&output=full'
    const thunk = fetchPetsByShelter(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(fetchPets)
  })
})