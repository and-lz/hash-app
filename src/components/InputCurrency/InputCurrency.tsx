import React, { useRef, useState } from 'react'
import { formatToCurrency } from '../../infrastructure/format/currency'
import { InputField } from '../DesignSystem/Form/Input/Input.styles'
import {
  FormLabelAddOn,
  FormLabel,
} from '../DesignSystem/Form/Label/Label.styles'

interface InputCurrencyProps {
  required?: boolean
  label: string
  addon?: string
  value?: number
  onChange: Function
  min?: number
  max?: number
  placeholder?: 'string'
}

function InputCurrency({
  label,
  required,
  addon,
  value = 0,
  min,
  max,
  onChange,
}: InputCurrencyProps) {
  const input = useRef<HTMLInputElement>()
  const [formattedValue, setFormmatedValue] = useState(formatToCurrency(value))

  function onChangeInternal() {
    if (!input.current) return
    const onlyNumbers = (input.current.value.replace(/\D+/g, '') as any) / 100
    setFormmatedValue(formatToCurrency(onlyNumbers))
    onChange(onlyNumbers)
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
      />
      {addon && <FormLabelAddOn>{addon}</FormLabelAddOn>}
    </>
  )
}

export default InputCurrency
