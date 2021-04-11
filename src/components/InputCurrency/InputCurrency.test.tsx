import { render, RenderResult, screen } from '@testing-library/react'
import React from 'react'
import InputCurrency from './InputCurrency'

describe('<InputCurrency />', () => {
  let component: RenderResult
  beforeEach(() => {
    component = render(
      <InputCurrency label="Basic Input" min={1} max={3} onChange={() => {}} />,
    )
  })
  test('should render basic input with label', () => {
    const label = screen.getByText(/Basic Input/i)
    expect(label).toBeInTheDocument()
  })
  test('should render * on label when input is required', () => {
    let component = render(
      <InputCurrency label="Basic Input" required onChange={() => {}} />,
    )
    const label = component.getByLabelText('Basic Input *')
    expect(label).toBeInTheDocument()
  })
  test('should render addon when passed', () => {
    let component = render(
      <InputCurrency
        label="Basic Input"
        addon="Extra description"
        required
        onChange={() => {}}
      />,
    )
    const label = component.getByText('Extra description')
    expect(label).toBeInTheDocument()
  })
  test('should not render addon label when not passed prop', () => {
    let component = render(
      <InputCurrency label="Basic Input" required onChange={() => {}} />,
    )
    const label = component.queryByText('Extra description')
    expect(label).toBeFalsy()
  })
})
