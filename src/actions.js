import fetch from 'isomorphic-fetch' // jest does not play nicely with the Fetch API

export const REQUEST_DATA = 'REQUEST_DATA'
export const REQUEST_COMPLETED = 'REQUEST_COMPLETED'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export const requestData = () => ({
  type: REQUEST_DATA
})

export const requestCompleted = () => ({
  type: REQUEST_COMPLETED
})

export const receiveData = (data) => ({
  type: RECEIVE_DATA,
  data: data,
  receivedAt: new Date().toLocaleTimeString()
})

export const fetchData = dispatch => {
  dispatch(requestData())
  return fetch(`http://localhost:9000/`)
    .then(response => response.json())
    .then(json => dispatch(receiveData(json)))
    .catch(err => console.warn(err))
    .then(() => dispatch(requestCompleted()))
}
