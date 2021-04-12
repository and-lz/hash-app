import { InputField } from 'design-system/Form/Input/Input.styles'
import {
  FormLabel,
  FormLabelAddOn,
} from 'design-system/Form/Label/Label.styles'
import { formatToCurrency } from 'infrastructure/currency/currency'
import React, { useRef, useState } from 'react'

interface InputCurrencyProps {
  required?: boolean
  label: string
  addon?: string
  value?: number
  onChange: Function
  placeholder?: 'string'
  min?: number
  max?: number
}

function InputCurrency({
  label,
  required,
  addon,
  value = 0,
  onChange,
  min,
  max,
}: InputCurrencyProps) {
  const input = useRef<HTMLInputElement>()
  const [formattedValue, setFormmatedValue] = useState(formatToCurrency(value))

  function onChangeInternal() {
    let onlyNumbers = getOnlyNumber(input)
    if (!onlyNumbers) return
    setFormmatedValue(formatToCurrency(onlyNumbers))
    onChange(onlyNumbers)
  }

  function onBlurInternal() {
    let onlyNumbers = getOnlyNumber(input)
    if (!onlyNumbers) return

    if (min && onlyNumbers < min) onlyNumbers = min
    if (max && onlyNumbers > max) onlyNumbers = max
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
        required={required}
        onBlur={onBlurInternal}
        value={formattedValue}
        onChange={onChangeInternal}
      />
      {addon && <FormLabelAddOn>{addon}</FormLabelAddOn>}
    </>
  )
}

function getOnlyNumber(ref: { current: any }) {
  if (!ref.current) return
  let onlyNumbers = ref.current.value.replace(/\D+/g, '') / 100
  return onlyNumbers
}

export default InputCurrency
