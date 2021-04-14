import React from 'react'
import { FlatButton } from 'design-system/Button/Button'

interface ButtonProps extends Partial<HTMLButtonElement> {
  label: string
  onClick?: Function
  autofocus?: boolean
}

function Button({ autofocus, label, onClick = () => {} }: ButtonProps) {
  return (
    <FlatButton autoFocus={autofocus} onClick={() => onClick()}>
      {label}
    </FlatButton>
  )
}

export default Button
