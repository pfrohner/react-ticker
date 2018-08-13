import React from 'react'
import ReactDOM from 'react-dom'
import Price from './Price'

const data = {
  price: 1533919867.615947,
  trend: 'up',
  difference: -1.2
}
const trend = 'up'
const difference = 2

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Price data={data} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
