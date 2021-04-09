import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { Spacer } from '../Spaces/Spaces'
import { Heading1 } from '../Typography/Headings'
import { Text } from '../Typography/Paragraph'
import { ModalBackground, Modal as ModalBox } from './Modal.styles'

interface ModalProps {
  title: string
  content?: string
  visible: boolean
  onClose: Function
}

function Modal({ title, content, visible, onClose }: ModalProps) {
  const [showModal, setShowModal] = useState(visible)

  useEffect(() => {
    setShowModal(visible)
  }, [visible])

  return (
    <>
      <ModalBackground visible={showModal}>
        <ModalBox>
          <Heading1>{title}</Heading1>
          <Text>{content}</Text>
          <Spacer size="big" />
          <Button
            label="Ok, tentar mais tarde"
            onClick={() => {
              setShowModal(false)
              onClose()
            }}
          />
        </ModalBox>
      </ModalBackground>
    </>
  )
}

export default Modal
