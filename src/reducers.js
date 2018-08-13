import {
  REQUEST_DATA,
  RECEIVE_DATA,
  REQUEST_COMPLETED
} from './actions'
import { getDifferenceInPercentage } from './utils'

const posts = (state = {
  isFetching: false,
  lastPrice: null,
  priceData: {},
  labels: [],
  values: []
}, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_DATA:
      const newPrice = action.data.last_price
      const trend = state.lastPrice && state.lastPrice !== newPrice ? state.lastPrice < newPrice  ? 'up' : 'down' : null // meh
      const difference = state.lastPrice ? getDifferenceInPercentage(state.lastPrice, newPrice) : null

      return {
        ...state,
        values: [...state.values, newPrice].slice(-10),
        labels: [...state.labels, action.receivedAt].slice(-10),
        priceData: {
          price: newPrice,
          trend: trend,
          difference: difference
        },
        lastPrice: newPrice
      }
    case REQUEST_COMPLETED:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

export default posts
