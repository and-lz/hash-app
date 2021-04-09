import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'
import HomePage from './Home'

jest.mock('axios')

describe('<HomePage>', () => {
  let component: RenderResult
  beforeEach(() => {
    component = render(<HomePage />)
  })
  test('Should render page without erros', () => {
    const label = screen.getByText(/Simule sua antecipação/i)
    expect(label).toBeInTheDocument()
  })
})
