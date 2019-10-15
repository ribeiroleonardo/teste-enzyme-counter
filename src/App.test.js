import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({
  adapter: new EnzymeAdapter()
})


/**
 * Factory funcion to create a ShallowWrapper
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {wrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) {
    wrapper.setState(state)
  }

  return wrapper
}

/**
 * Return ShallowWrapper containing nodes with the given data
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search
 * @param {string} val - Value of data-test to search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const display = findByTestAttr(wrapper, 'counter-display')
  expect(display.length).toBe(1)
})

test('counter starts at 0', () => {
  const wrapper = setup()
  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)
})

test('clicking button increments counter display', () => {
  const counter = 7
  const wrapper = setup(null, { counter })

  // Simulate button click
  const button = findByTestAttr(wrapper, 'increment-button')
  button.simulate('click')

  // Check display counter
  const display = findByTestAttr(wrapper, 'counter-display')
  expect(display.text()).toContain(counter + 1)

})