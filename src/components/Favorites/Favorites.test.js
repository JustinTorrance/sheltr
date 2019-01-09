import { mapStateToProps } from './Favorites'
import React from 'react';
import Favorites from './Favorites'

describe('Favorites', () => {
  it('matches the snapshot', () => {
    const wrapper = <Favorites />
    expect(wrapper).toMatchSnapshot()
  })

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
})