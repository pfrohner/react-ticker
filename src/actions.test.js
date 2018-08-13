import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
// import fetchMock from 'fetch-mock' // uninstalled
import { REQUEST_DATA, RECEIVE_DATA, fetchData } from './actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// installing fetchMock breaks all the other tests
// https://github.com/facebook/jest/issues/1767#issuecomment-313434888
xdescribe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates REQUEST_DATA and RECEIVE_DATA in store when fetching has been done', () => {
    fetch.getOnce('localhost:9000', { data: {last_price: 4000} , headers: { 'content-type': 'application/json' } })
    const expectedActions = [
      { type: REQUEST_DATA },
      { type: RECEIVE_DATA, data: { last_price: 4000} }
    ]
    const store = mockStore({ data: {} })

    return store.dispatch(fetchData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
