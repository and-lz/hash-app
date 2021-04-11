import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import Modal from './Modal'

describe('<Modal />', () => {
  let component: RenderResult
  beforeEach(() => {
    component = render(
      <Modal
        title="Basic Modal"
        visible
        content="Basic content"
        onClose={() => {}}
      />,
    )
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
