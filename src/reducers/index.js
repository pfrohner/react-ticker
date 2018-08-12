import {
  REQUEST_DATA,
  RECEIVE_DATA
} from '../actions'

const posts = (state = {
  isFetching: false,
  lastPrice: null,
  data: {},
  labels: [],
  values: [],
  trend: null,
  difference: null
}, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_DATA:
      const newPrice = parseFloat(action.data.last_price)
      const trend = state.lastPrice && state.lastPrice !== newPrice ? state.lastPrice < newPrice  ? 'up' : 'down' : null // meh
      const difference = trend === 'up'
              ? (newPrice - state.lastPrice) / state.lastPrice * 100
              : trend === 'down' ? (state.lastPrice - newPrice) / state.lastPrice * 100 : null

      return {
        ...state,
        isFetching: false,
        data: action.data,
        values: [...state.values, newPrice].slice(-10),
        labels: [...state.labels, action.receivedAt].slice(-10),
        lastPrice: newPrice,
        trend: trend,
        difference: difference
      }
    default:
      return state
  }
}

export default posts
