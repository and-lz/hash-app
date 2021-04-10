import { render, RenderResult, screen } from '@testing-library/react'
import React from 'react'
import CalculatorPage from './Calculator'

jest.mock('axios')

describe('<HomePage>', () => {
  let component: RenderResult
  beforeEach(() => {
    component = render(<CalculatorPage antecipationDays={[1, 15, 30, 90]} />)
  })
  test('Should render page without erros', () => {
    const label = screen.getByText(/Simule sua antecipação/i)
    expect(label).toBeInTheDocument()
  })
})
