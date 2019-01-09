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

describe('mapDispatchToProps', () => {
  it('calls dispatch with a addFavorite thunk when handeSubmit is called', () => {
    const mockDispatch = jest.fn()
    const thunkToDispatch = addFavorite(e)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.toggleFavorite(e)
    expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch)
  })
  it('calls dispatch with a removeFavorite thunk when handeSubmit is called', () => {
    const mockDispatch = jest.fn()
    const thunkToDispatch = removeFavorite(e)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.toggleFavorite(e)
    expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch)
  })
})