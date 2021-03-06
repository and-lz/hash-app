import Button from 'components/Button/Button'
import { VerticalSpacer } from 'design-system/Spaces/Spaces'
import { Heading1 } from 'design-system/Typography/Headings'
import { Text } from 'design-system/Typography/Paragraph'
import React, { useEffect, useState } from 'react'
import {
  ModalBox,
  ModalBackground,
  ModalImage,
  ModalContent,
} from 'design-system/Modal/Modal'

interface ModalProps {
  title: string
  content?: string
  visible?: boolean
  onClose?: Function
  action?: string
}

function Modal({
  title,
  content,
  visible = false,
  onClose = () => {},
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
          <ModalImage />
          <ModalContent>
            <Heading1 data-testid="modal-title">{title}</Heading1>
            <VerticalSpacer />
            <Text data-testid="modal-content">{content}</Text>
            <VerticalSpacer size="big" />
            <Button
              autofocus
              type="button"
              label={action}
              onClick={() => {
                setShowModal(false)
                onClose()
              }}
            />
          </ModalContent>
        </ModalBox>
      </ModalBackground>
    </>
  )
}

export default Modal
