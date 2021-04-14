import Input from 'components/Input/Input'
import { formatToCurrency } from 'infrastructure/currency/currency'
import React, { useRef, useState } from 'react'
import { getOnlyNumbersFromInputValue } from './InputCurrency.rules'

interface InputCurrencyProps {
  required?: boolean
  label: string
  addon?: string
  value?: number
  onChange?: Function
  placeholder?: 'string'
  min?: number
  max?: number
}

function InputCurrency({
  label,
  required,
  addon,
  value = 0,
  onChange = (value: any) => value,
  min,
  max,
}: InputCurrencyProps) {
  const input = useRef<HTMLInputElement>()
  const [formattedValue, setFormmatedValue] = useState(formatToCurrency(value))

  function onClick() {
    input.current?.select()
  }

  function onChangeInternal() {
    let onlyNumbers = getOnlyNumbersFromInputValue(input)
    if (!onlyNumbers) return
    setFormmatedValue(formatToCurrency(onlyNumbers))
    onChange(onlyNumbers)
  }

  function onBlurInternal() {
    let onlyNumbers = getOnlyNumbersFromInputValue(input)
    if (!onlyNumbers) return

    if (min && onlyNumbers < min) onlyNumbers = min
    if (max && onlyNumbers > max) onlyNumbers = max
    setFormmatedValue(formatToCurrency(onlyNumbers))
    onChange(onlyNumbers)
  }

  return (
    <Input
      inputRef={input}
      label={label}
      required={required}
      addon={addon}
      value={formattedValue}
      onChange={onChangeInternal}
      onBlur={onBlurInternal}
      onClick={onClick}
    />
  )
}

export default InputCurrency
