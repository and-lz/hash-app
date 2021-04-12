import { InputField } from 'design-system/Form/Input/Input'
import { Addon, Label } from 'design-system/Form/Label/Label'
import React from 'react'

interface InputProps {
  type?: 'text' | 'number'
  required?: boolean
  label: string
  addon?: string
  value?: string | number
  onChange?: Function
  onBlur?: Function
  min?: number
  max?: number
  placeholder?: 'string'
  inputRef?: any
}

function Input({
  type = 'text',
  label,
  required,
  addon,
  value,
  min,
  max,
  inputRef = React.createRef(),
  onBlur = (value: any) => value,
  onChange = (value: any) => value,
}: InputProps) {
  return (
    <>
      <Label htmlFor={`${label} field`}>
        {label} {required && '*'}
      </Label>
      <InputField
        ref={inputRef}
        data-testid="input-field"
        id={`${label} field`}
        min={min}
        max={max}
        required={required}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
        onBlur={e => onBlur(e.currentTarget.value)}
        type={type}
      />
      {addon && <Addon>{addon}</Addon>}
    </>
  )
}

export default Input
