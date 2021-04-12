import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import InputCurrency from './InputCurrency'
import { fireEvent, screen } from '@testing-library/dom'
import { act } from 'react-dom/test-utils'
import { removeWhitespaceInString } from 'infrastructure/sanitization/whitespace'

const label = 'Basic Input'
const addon = 'Extra description'

describe('<InputCurrency />', () => {
  let component: RenderResult
  let getByText: any
  let queryByText: any
  let field: any
  beforeEach(() => {
    component = render(<InputCurrency min={1000} max={3000} label={label} />)
    getByText = component.getByText
    queryByText = component.queryByText
    field = component.getByLabelText('Basic Input')
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  test('should change value on blur event to match max prop passed', async () => {
    act(() => {
      fireEvent.change(field, { target: { value: 500000000000 } })
    })
    act(() => {
      fireEvent.focusOut(field)
    })
    expect(removeWhitespaceInString(field.value)).toBe('R$3.000,00')
  })
  test('should change value on blur event to match min prop passed', async () => {
    act(() => {
      fireEvent.change(field, { target: { value: 10 } })
    })
    act(() => {
      fireEvent.focusOut(field)
    })
    expect(removeWhitespaceInString(field.value)).toBe('R$1.000,00')
  })
})
