import { fireEvent } from '@testing-library/dom'
import { render, RenderResult } from '@testing-library/react'
import { removeWhitespaceInString } from 'infrastructure/sanitization/whitespace'
import React from 'react'
import { act } from 'react-dom/test-utils'
import InputCurrency from './InputCurrency'

const label = 'Basic Input'

describe('<InputCurrency />', () => {
  let component: RenderResult
  let field: any
  beforeEach(() => {
    component = render(<InputCurrency min={1000} max={3000} label={label} />)
    field = component.getByLabelText(label)
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
