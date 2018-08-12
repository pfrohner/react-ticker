import React from 'react'
import ReactDOM from 'react-dom'
import Price from './Price'

const data = {
  timestamp: 1533919867.615947,
  high: 1222,
  low: 22
}
const trend = 'up'
const difference = 2

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Price data={data} trend={trend} difference={difference} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
