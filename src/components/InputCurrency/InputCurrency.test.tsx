import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import InputCurrency from './InputCurrency'

const label = 'Basic Input'
const addon = 'Extra description'

describe('<InputCurrency />', () => {
  let component: RenderResult
  let getByText: any
  let queryByText: any
  beforeEach(() => {
    component = render(<InputCurrency label={label} />)
    getByText = component.getByText
    queryByText = component.queryByText
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
