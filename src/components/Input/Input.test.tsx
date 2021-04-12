import { fireEvent, render, RenderResult } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import Input from './Input'

const label = 'Basic Input'
const addon = 'Extra description'

describe('<Input />', () => {
  let component: RenderResult
  let getByText: any
  let queryByText: any
  let onChangeMock = jest.fn()
  let onBlurMock = jest.fn()
  let field: any
  beforeEach(() => {
    component = render(
      <Input onChange={onChangeMock} onBlur={onBlurMock} label={label} />,
    )
    getByText = component.getByText
    queryByText = component.queryByText
    field = component.getByLabelText(label)
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  test('should render basic input with label', () => {
    getByText(label)
  })
  test('should render * on label when input is required', () => {
    let component = render(<Input label={label} required />)
    getByText('Basic Input *')
  })
  test('should render addon when passed', () => {
    component.rerender(<Input label={label} addon={addon} required />)
    getByText(addon)
  })
  test('should not render addon label when not passed prop', () => {
    component.rerender(<Input label={label} required />)
    expect(queryByText('Extra description')).not.toBeInTheDocument()
  })
  test('should call onChange with the correct value', () => {
    act(() => {
      fireEvent.change(field, { target: { value: 3000 } })
    })
    expect(onChangeMock).toBeCalledWith('3000')
  })
  test('should call onChange with the correct value', () => {
    act(() => {
      fireEvent.focusOut(field, { target: { value: 20000 } })
    })
    expect(onBlurMock).toBeCalledWith('20000')
  })
})
