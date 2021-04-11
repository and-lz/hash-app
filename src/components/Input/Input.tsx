import React from 'react'
import { InputField } from '../DesignSystem/Form/Input/Input.styles'
import {
  FormLabelAddOn,
  FormLabel,
} from '../DesignSystem/Form/Label/Label.styles'

interface InputProps {
  type?: 'text' | 'number'
  required?: boolean
  label: string
  addon?: string
  value?: string | number
  onChange: Function
  min?: number
  max?: number
  placeholder?: 'string'
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
      <FormLabel htmlFor={`${label} field`}>
        {label} {required && '*'}
      </FormLabel>
      <InputField
        data-testid="input-field"
        id={`${label} field`}
        min={min}
        max={max}
        required={required}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
        type={type}
      />
      {addon && <FormLabelAddOn>{addon}</FormLabelAddOn>}
    </>
  )
}

export default Input
