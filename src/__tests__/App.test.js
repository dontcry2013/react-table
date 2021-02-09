import React from 'react';
import App from '../App';
import Enzyme, { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux/rootReducer';
import thunk from "redux-thunk";
import TableContainer from '../components/TableContainer';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
});

describe('<TableContainer /> unit test', () => {
  const mockStore = createStore(rootReducer, applyMiddleware(thunk));
  const getWrapper = () => mount(
    <Provider store={mockStore}>
      <TableContainer />
    </Provider>
    
  );
});
