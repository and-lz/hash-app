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
  action?: string
}

function Modal({
  title,
  content,
  visible,
  onClose,
  action = 'Fechar',
}: ModalProps) {
  const [showModal, setShowModal] = useState(visible)

  useEffect(() => {
    setShowModal(visible)
  }, [visible])

  if (!showModal) return <></>
  return (
    <>
      <ModalBackground visible={showModal}>
        <ModalBox>
          <Heading1>{title}</Heading1>
          <Text>{content}</Text>
          <Spacer size="big" />
          <Button
            label={action}
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
