import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mapDispatchToProps } from './App'
import { findShelters } from '../../thunks/findShelters'
import { shallow } from 'enzyme'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('matches the snapshot', () => {
    const wrapper = <App />
    expect(wrapper).toMatchSnapshot()
  })


  describe('mapDispatchToProps', () => {
    it('calls dispatch with a findShelters thunk when handeSubmit is called', () => {
      const mockDispatch = jest.fn()
      const thunkToDispatch = findShelters('80305')
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.handleSubmit('80305')
      expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch)
    })
  })
})
