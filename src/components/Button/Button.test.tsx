import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import Button from './Button'

const label = 'Basic Button'

describe('<Button />', () => {
  let component: RenderResult
  let getByText: any
  let queryByText: any
  beforeEach(() => {
    component = render(<Button label={label} />)
    getByText = component.getByText
    queryByText = component.queryByText
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  test('Should render button with correct label', () => {
    getByText(label)
  })
})
