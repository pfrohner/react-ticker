import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
// installing fetchMock may break all the other tests on sierra OS, that case run 'brew install watchman'
// https://github.com/facebook/jest/issues/1767#issuecomment-313434888
import fetchMock from 'fetch-mock'
import { REQUEST_DATA, RECEIVE_DATA, REQUEST_COMPLETED } from './actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const fetchData = [
  { type: REQUEST_DATA },
  {
    type: RECEIVE_DATA,
    data: {
      last_price: 4000
    }
  },
  { type: REQUEST_COMPLETED }
]

xdescribe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates REQUEST_DATA, RECEIVE_DATA, and REQUEST_COMPLETED in store when fetching has been done', () => {
    fetchMock.getOnce('localhost:9000', { data: {last_price: 4000} , headers: { 'content-type': 'application/json' } })
    const expectedActions = [
      { type: REQUEST_DATA },
      { type: RECEIVE_DATA, data: { last_price: 4000} },
      { type: REQUEST_COMPLETED }
    ]
    const store = mockStore({ data: {} })

    return store.dispatch(fetchData).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
