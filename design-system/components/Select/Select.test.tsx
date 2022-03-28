import * as React from 'react'
import { cleanup, render, screen } from '@/test'
import { Select } from './Select'
describe('<Select />', () => {
  afterEach(cleanup)
  it('renders', () => {
    render(<Select />)
  })
})