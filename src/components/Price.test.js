import React from 'react'
import ReactDOM from 'react-dom'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Price from './Price'

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div')
  const data = {
    price: 4321,
    trend: 'up',
    difference: -1.2
  }

  ReactDOM.render(<Price data={data} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders price', () => {
  const data = {
    price: 4321
  }
  const wrapper = mount(<Price data={data} />)
  expect(wrapper.find('h2').text()).toBe('£4321')
})

it('doesnt render any arrows when difference is not specified', () => {
  const data = {
    price: 4321,
    trend: 'up'
  }
  const wrapper = mount(<Price data={data} />)

  expect(wrapper.find('span.glyphicon-circle-arrow-up').length).toBe(0)
  expect(wrapper.find('span.glyphicon-circle-arrow-down').length).toBe(0)
})


it('renders up arrow when trend is up', () => {
  const data = {
    price: 4321,
    trend: 'up',
    difference: -1.2
  }
  const wrapper = mount(<Price data={data} />)

  expect(wrapper.find('span.glyphicon-circle-arrow-up').length).toBe(1)
})

it('renders down arrow when trend is up', () => {
  const data = {
    price: 1533919867.615947,
    trend: 'down',
    difference: -1.2
  }
  const wrapper = mount(<Price data={data} />)

  expect(wrapper.find('span.glyphicon-circle-arrow-down').length).toBe(1)
})
