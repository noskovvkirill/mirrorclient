import * as React from 'react'
import { cleanup, render, screen } from '@/test'
import { Dropdown } from './Dropdown'
describe('<Dropdown />', () => {
  afterEach(cleanup)
  it('renders', () => {
    render(<Dropdown />)
  })
})