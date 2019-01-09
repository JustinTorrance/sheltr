import { fetchShelters }  from '../actions/index'
import findShelters from './findShelters'

const API_KEY = `${process.env.REACT_APP_API_KEY}`

describe('findShelters', () => {
  let mockUrl
  let mockDispatch
  beforeEach(() => {
    mockUrl = 'https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?key=' + API_KEY + '&location=' + city + '&format=json&output=full&count=5'
    mockDispatch = jest.fn()
  })
  it('should dispatch signIn', async () => {
    const mockShelters = [{ name: 'shelter'}]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        shelters: mockShelters
      })
    }))
    const thunk = findShelters(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(fetchShelters)
  })
})