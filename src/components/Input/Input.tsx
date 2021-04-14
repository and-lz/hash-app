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
  onClick?: Function
  onFocus?: Function
  min?: number
  max?: number
  placeholder?: 'string'
  inputRef?: any
  autofocus?: boolean
  inputmode?:
    | 'text'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
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
  onClick = () => {},
  onFocus = () => {},
  inputmode,
  autofocus,
}: InputProps) {
  return (
    <>
      <Label>
        {label} {required && '*'}
        <InputField
          autoFocus={autofocus}
          ref={inputRef}
          min={min}
          max={max}
          required={required}
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
          onBlur={e => onBlur(e.currentTarget.value)}
          onClick={e => onClick(e)}
          onFocus={e => onFocus(e)}
          type={type}
          inputMode={inputmode}
        />
      </Label>
      {addon && <Addon>{addon}</Addon>}
    </>
  )
}

export default Input
