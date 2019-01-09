import { mapStateToProps } from './Display'

describe('mapStateToProps', () => {
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