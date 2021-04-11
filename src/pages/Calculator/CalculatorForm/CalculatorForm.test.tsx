import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'
import CalculatorForm from './CalculatorForm'

describe('<CalculatorForm />', () => {
  let component: RenderResult
  beforeEach(() => {
    component = render(<CalculatorForm onSubmit={() => {}} />)
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
