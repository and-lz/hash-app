import { render, RenderResult, screen } from '@testing-library/react'
import React from 'react'
import Loader from './Loader'

describe('<Loader />', () => {
  let component: RenderResult
  beforeEach(() => {
    component = render(<Loader size={50} />)
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  test('Should add cursor wait to body when loading', () => {
    component = render(<Loader size={50} />)
    expect(document.body.style.cursor).toBe('wait')
  })
  test('Should add cursor auto to body when size is 0', () => {
    component = render(<Loader size={0} />)
    expect(document.body.style.cursor).toBe('auto')
  })
  test('Should add cursor auto to body when size is 100', () => {
    component = render(<Loader size={100} />)
    expect(document.body.style.cursor).toBe('auto')
  })
})
