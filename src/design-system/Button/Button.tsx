import React from 'react'
import { FlatButton } from './Button.styles'

interface ButtonProps extends Partial<HTMLButtonElement> {
  label: string
  onClick: Function
}

function Button({ label, onClick }: ButtonProps) {
  return <FlatButton onClick={() => onClick()}>{label}</FlatButton>
}

export default Button