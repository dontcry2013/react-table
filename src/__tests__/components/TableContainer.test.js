import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from '../../redux/rootReducer';
import TableContainer from '../../components/TableContainer';

describe('<TableContainer /> unit test', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  })

  it('Table test', () => {
    const mockStore = createStore(rootReducer, applyMiddleware(thunk));
    const getWrapper = () => mount(
      <Provider store={mockStore}>
        <TableContainer />
      </Provider>
    );
    const wrapper = getWrapper();
    expect(wrapper.find('Table').length).toBe(2);
  })

});
