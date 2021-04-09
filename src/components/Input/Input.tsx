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
      <FormLabel>
        {label} {required && '*'}
      </FormLabel>
      <InputField
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
