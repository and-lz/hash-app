import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'
import CalculatorResult from './CalculatorResult'

describe('<CalculatorResult />', () => {
  let component: RenderResult
  beforeEach(() => {
    component = render(
      <CalculatorResult data={{ 1: 3000, 15: 3050 }} days={[1, 15]} />,
    )
  })
  test('Should render with the correct labels', () => {
    const labels = component.queryAllByTestId('day')
    expect(labels[0]).toHaveTextContent(`Amanhã:`)
    expect(labels[1]).toHaveTextContent(`Em 15 dias:`)
  })
  test('Should render with the correct amount', () => {
    const values = component.queryAllByTestId('value')
    expect(values[0]).toHaveTextContent(`R$ 3.000,00`)
    expect(values[1]).toHaveTextContent(`R$ 3.050,00`)
  })
})
