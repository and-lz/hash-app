import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'
import CalculatorResult from './CalculatorResult'

describe('<CalculatorResult />', () => {
  let component: RenderResult
  let getByText: any
  let queryByText: any
  beforeEach(() => {
    component = render(
      <CalculatorResult
        data={{ 1: 3000, 15: 3050, 30: 4000, 90: 5000 }}
        days={[1, 15, 30, 90]}
      />,
    )
    getByText = component.getByText
    queryByText = component.queryByText
  })
  test('Should render with the correct labels', () => {
    getByText('Amanhã:')
    getByText('Em 15 dias:')
    getByText('Em 30 dias:')
    getByText('Em 90 dias:')
  })
  test('Should render with the correct amount', () => {
    getByText(`R$ 3.000,00`)
    getByText(`R$ 3.050,00`)
    getByText(`R$ 4.000,00`)
    getByText(`R$ 5.000,00`)
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
