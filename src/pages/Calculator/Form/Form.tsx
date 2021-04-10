import React, { useRef, useState } from 'react'
import Button from '../../../components/DesignSystem/Button/Button'
import { Form } from '../../../components/DesignSystem/Form/Form'
import { Spacer } from '../../../components/DesignSystem/Spaces/Spaces'
import Input from '../../../components/Input/Input'

interface CalculadoraFormProps {
  onSubmit: Function
}

function CalculatorForm({ onSubmit }: CalculadoraFormProps) {
  const form = (useRef() as unknown) as HTMLFormElement

  const [amount, setAmount] = useState('2000')
  const [installments, setInstallments] = useState('12')
  const [mdr, setMdr] = useState('1')

  function checkFormValidity() {
    if (form.current.checkValidity()) {
      onSubmit(amount, installments, mdr)
    }
  }

  return (
    <>
      <Form
        ref={form}
        onSubmit={(e: React.FormEvent<HTMLInputElement>) => {
          e.preventDefault()
          checkFormValidity()
        }}
      >
        <Input
          onChange={(value: string) => setAmount(value)}
          required
          label="Informe o valor da renda"
          min={1000}
          value={amount}
          type="number"
        />
        <Spacer />
        <Input
          onChange={(value: string) => setInstallments(value)}
          required
          label="Em quantas parcelas"
          value={installments}
          addon="Máximo de 12 parcelas"
          type="number"
          min={1}
          max={12}
        />
        <Spacer />
        <Input
          onChange={(value: string) => setMdr(value)}
          required
          label="Informe o percentual de MDR"
          value={mdr}
          type="number"
          min={0}
        />
        <Spacer />
        <Button onClick={checkFormValidity} type="submit" label="Consultar" />
      </Form>
    </>
  )
}

export default CalculatorForm
