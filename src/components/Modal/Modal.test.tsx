import { fireEvent, render, RenderResult } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import Modal from './Modal'

const title = 'Basic title'
const content = 'Basic content'
const action = 'OK, close'

describe('<Modal />', () => {
  let component: RenderResult
  let getByText: any
  let queryByText: any

  beforeEach(() => {
    component = render(
      <Modal title={title} visible content={content} action={action} />,
    )
    getByText = component.getByText
    queryByText = component.queryByText
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  test('Should render modal with the correct title, content, and button', () => {
    getByText(title)
    getByText(content)
    getByText(action)
  })
  test('Should not render modal when property visible was false', () => {
    component.rerender(
      <Modal title="Basic title" content="Basic content" action="OK, close" />,
    )
    expect(queryByText(title)).not.toBeInTheDocument()
    expect(queryByText(content)).not.toBeInTheDocument()
  })
  test('Should hide modal after click on action button', () => {
    getByText(title)
    getByText(content)
    const button = getByText(action)

    act(() => {
      fireEvent.click(button)
    })

    expect(queryByText(title)).not.toBeInTheDocument()
    expect(queryByText(content)).not.toBeInTheDocument()
  })
})
