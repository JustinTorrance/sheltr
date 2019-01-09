describe('mapDispatchToProps', () => {
  it('calls dispatch with a fetchPetsByShelter thunk when handleClick is called', () => {
    const mockDispatch = jest.fn()
    const thunkToDispatch = fetchPetsByShelter(e)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.toggleFavorite(e)
    expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch)
  })
})