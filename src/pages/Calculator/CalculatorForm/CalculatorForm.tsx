import React, { useRef, useState } from 'react'
import Button from 'components/Button/Button'
import { Form } from 'design-system/Form/Form'
import { VerticalSpacer } from 'design-system/Spaces/Spaces'
import Input from 'components/Input/Input'
import InputCurrency from 'components/InputCurrency/InputCurrency'

interface CalculadoraFormProps {
  onSubmit: Function
}

function CalculatorForm({ onSubmit }: CalculadoraFormProps) {
  const form = (useRef() as unknown) as HTMLFormElement

  const [amount, setAmount] = useState(1000)
  const [installments, setInstallments] = useState(12)
  const [mdr, setMdr] = useState(1)

  function checkFormValidity() {
    if (form.current.checkValidity()) {
      onSubmit(amount, installments, mdr)
    }
  }

  return (
    <Form
      ref={form}
      onSubmit={(e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        checkFormValidity()
      }}
    >
      <InputCurrency
        autofocus
        onChange={(value: number) => setAmount(value)}
        required
        label="Informe o valor da renda"
        value={amount}
        min={1000}
        max={100000000}
      />
      <VerticalSpacer />
      <Input
        onChange={(value: number) => setInstallments(value)}
        required
        label="Em quantas parcelas"
        value={installments}
        addon="Máximo de 12 parcelas"
        type="number"
        min={1}
        max={12}
      />
      <VerticalSpacer />
      <Input
        onChange={(value: number) => setMdr(value)}
        required
        label="Informe o percentual de MDR"
        value={mdr}
        type="number"
        min={0}
      />
      <VerticalSpacer />
      <Button onClick={checkFormValidity} type="submit" label="Consultar" />
    </Form>
  )
}

export default CalculatorForm
