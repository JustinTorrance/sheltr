import { mapStateToProps } from './Favorites'

describe('mapStateToProps', () => {
  it('should return an array favorite pets', () => {
    const mockState = {
      favorites: [{name: 'fluffy'}]
    }
    const expected = {
      favorites: [{name: 'fluffy'}] 
    }
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})