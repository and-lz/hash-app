import { fireEvent, render, RenderResult } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import Modal from './Modal'

describe('<Modal />', () => {
  let component: RenderResult
  let modalTitle: HTMLElement | null
  let modalContent: HTMLElement | null
  let modalButtonAction: Node | Window
  beforeEach(() => {
    component = render(
      <Modal
        title="Basic title"
        visible
        content="Basic content"
        action="OK, close"
        onClose={() => {}}
      />,
    )
    modalTitle = component.queryByTestId('modal-title')
    modalContent = component.queryByTestId('modal-content')
    modalButtonAction = component.getByText('OK, close')
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  test('Should render modal with the correct title, content, and button', () => {
    expect(modalTitle).toHaveTextContent('Basic title')
    expect(modalContent).toHaveTextContent('Basic content')
    expect(modalButtonAction).toBeInTheDocument()
  })
  test('Should not render modal when property visible was false', () => {
    component.rerender(
      <Modal title="Basic title" content="Basic content" action="OK, close" />,
    )
    expect(modalTitle).not.toBeInTheDocument()
    expect(modalContent).not.toBeInTheDocument()
  })
  test('Should hide modal after click on action button', () => {
    expect(modalTitle).toBeInTheDocument()
    expect(modalContent).toBeInTheDocument()

    act(() => {
      fireEvent.click(modalButtonAction)
    })

    expect(modalTitle).not.toBeInTheDocument()
    expect(modalContent).not.toBeInTheDocument()
  })
})
