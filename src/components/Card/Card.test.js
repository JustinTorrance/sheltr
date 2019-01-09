import { mapStateToProps } from './Card'

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
  it('should return an array from pets from a shelter', () => {
    const mockState = {
      petsFromShelter: [{name: 'fluffy'}]
    }
    const expected = {
      petsFromShelter: [{name: 'fluffy'}] 
    }
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})