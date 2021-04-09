import React from 'react'
import { Addon, InputField, Label } from './Input.styles'

interface InputProps {
  type?: 'text' | 'number'
  required?: boolean
  label: string
  addon?: string
  value?: string
  onChange: Function
}

function Input({
  type = 'text',
  label,
  required,
  addon,
  value,
  onChange,
}: InputProps) {
  return (
    <>
      <Label>
        {label} {required && '*'}
      </Label>
      <InputField
        required={required}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
        type={type}
      />
      {addon && <Addon>{addon}</Addon>}
    </>
  )
}

export default Input
