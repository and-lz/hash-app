import React, { useRef, useState } from 'react'
import { InputField } from '../../design-system/Form/Input/Input.styles'
import {
  FormLabelAddOn,
  FormLabel,
} from '../../design-system/Form/Label/Label.styles'

interface InputProps {
  type?: 'text' | 'number'
  required?: boolean
  label: string
  addon?: string
  value?: string
  onChange: Function
  min?: number
  max?: number
  placeholder?: 'string'
  formatFunction?: Function
  unformatFunction?: Function
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
  formatFunction = (value: any) => {
    return value
  },
  unformatFunction = (value: any) => {
    return value
  },
}: InputProps) {
  const input = useRef()
  const [formattedValue, setFormmatedValue] = useState(formatFunction(value))

  function onChangeInternal() {
    // @ts-ignore
    setFormmatedValue(formatFunction(input.current.value))
    // @ts-ignore
    console.log(formatFunction(input.current.value))
    // @ts-ignore
    onChange(unformatFunction(input.current.value))
  }

  return (
    <>
      <FormLabel htmlFor={`${label} field`}>
        {label} {required && '*'}
      </FormLabel>
      <InputField
        // @ts-ignore
        ref={input}
        data-testid="input-field"
        id={`${label} field`}
        min={min}
        max={max}
        required={required}
        value={formattedValue}
        onChange={onChangeInternal}
        type={type}
      />
      {addon && <FormLabelAddOn>{addon}</FormLabelAddOn>}
    </>
  )
}

export default Input
