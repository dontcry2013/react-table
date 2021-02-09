import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

// You would import the action from your codebase in a real scenario
function success(data) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    status: data.length,
  }
}

function fetchData (userId) {
  return dispatch => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        console.log('ddddd')
        dispatch(success(data))
      })
  };
}

it('should execute fetch data', () => {
  const store = mockStore({})

  // Return the promise
  return store.dispatch(fetchData(1))
    .then(() => {
      const actions = store.getActions()
      console.log('000', actions);
      expect(actions[0]).toEqual({
        type: 'FETCH_DATA_SUCCESS',
        status: 10,
      })
    })
})