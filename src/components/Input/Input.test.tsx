import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import Input from './Input'

const label = 'Basic Input'
const addon = 'Extra description'

describe('<Input />', () => {
  let component: RenderResult
  let getByText: any
  let queryByText: any
  beforeEach(() => {
    component = render(<Input label={label} />)
    getByText = component.getByText
    queryByText = component.queryByText
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
})
