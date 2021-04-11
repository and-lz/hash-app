import Button from 'components/DesignSystem/Button/Button'
import { Spacer } from 'components/DesignSystem/Spaces/Spaces'
import { Heading1 } from 'components/DesignSystem/Typography/Headings'
import { Text } from 'components/DesignSystem/Typography/Paragraph'
import React, { useEffect, useState } from 'react'
import { Modal as ModalBox, ModalBackground } from './Modal.styles'

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
