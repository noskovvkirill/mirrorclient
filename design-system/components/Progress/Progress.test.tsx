import * as React from 'react'
import { cleanup, render, screen } from '@/test'
import { Progress } from './Progress'
describe('<Progress />', () => {
  afterEach(cleanup)
  it('renders', () => {
    render(<Progress />)
  })
})