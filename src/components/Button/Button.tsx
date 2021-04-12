import React from 'react'
import { FlatButton } from 'design-system/Button/Button'

interface ButtonProps extends Partial<HTMLButtonElement> {
  label: string
  onClick?: Function
}

function Button({ label, onClick = () => {} }: ButtonProps) {
  return <FlatButton onClick={() => onClick()}>{label}</FlatButton>
}

export default Button
