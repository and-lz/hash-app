import { fireEvent, render, RenderResult } from '@testing-library/react'
import React from 'react'
import Button from './Button'

const label = 'Basic Button'

describe('<Button />', () => {
  let component: RenderResult
  let getByText: any
  let queryByText: any
  let onClickMock: Function | undefined
  beforeEach(() => {
    onClickMock = jest.fn()
    component = render(<Button label={label} onClick={onClickMock} />)
    getByText = component.getByText
    queryByText = component.queryByText
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  test('Should render button with correct label', () => {
    getByText(label)
  })
  test('Should call onClick callback when button is clicked', () => {
    fireEvent.click(getByText(label))
    expect(onClickMock).toBeCalledTimes(1)

    fireEvent.click(getByText(label))
    fireEvent.click(getByText(label))
    fireEvent.click(getByText(label))
    expect(onClickMock).toBeCalledTimes(4)
  })
})
