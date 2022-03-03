import * as React from 'react'
import { cleanup, render, screen } from '@/test'
import { HoverCard } from './HoverCard'
describe('<HoverCard />', () => {
  afterEach(cleanup)
  it('renders', () => {
    render(<HoverCard />)
  })
})