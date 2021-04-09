import React from 'react'
import { Addon, InputField, Label } from './Input.styles'

interface InputProps {
  type?: 'text' | 'number'
  required?: boolean
  label: string
  addon?: string
  value?: string
  onChange: Function
  min?: number
  max?: number
}

function Input({
  type = 'text',
  label,
  required,
  addon,
  value,
  min,
  max,
  onChange,
}: InputProps) {
  return (
    <>
      <Label>
        {label} {required && '*'}
      </Label>
      <InputField
        min={min}
        max={max}
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
