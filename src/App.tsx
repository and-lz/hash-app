import React, { useState } from 'react'
import { Heading1, Heading2 } from './components/ds/Typography/Headings'
import { HighlightText } from './components/ds/Typography/Paragraph'
import Input from './components/Input/Input'
import APIAntecipation from './infrastructure/api/API/APIAntecipation/APIAntecipation'

function App() {
  const [amount, setAmount] = useState('2000')
  const [installments, setInstallments] = useState('12')
  const [mdr, setMdr] = useState('5')

  const [data, setData] = useState({
    30: 0,
    60: 0,
    90: 0,
  })

  const callAPI = async function () {
    const response = await APIAntecipation({
      amount,
      installments,
      mdr,
      days: [30, 60, 90],
    })
    setData(response.data)
  }

  console.log(data)
  return (
    <div className="App">
      <div>
        <Heading1>Simule sua antecipação</Heading1>
        <Input
          onChange={(value: string) => setAmount(value)}
          required
          label="Informe o valor da renda"
          value={amount}
        />
        <Input
          onChange={(value: string) => setInstallments(value)}
          required
          label="Em quantas parcelas"
          value={installments}
          addon="Máximo de 12 parcelas"
        />
        <Input
          onChange={(value: string) => setMdr(value)}
          required
          label="Informe o percentual de MDR"
          value={mdr}
        />
        <button onClick={callAPI}>consultar</button>
      </div>
      <div>
        <Heading2>Você receberá:</Heading2>
        <HighlightText>Amanhã: R$ 0</HighlightText>
        <HighlightText>Em 15 dias: R$ {data['30']}</HighlightText>
        <HighlightText>Em 30 dias: R$ {data['60']}</HighlightText>
        <HighlightText>Em 90 dias: R$ {data['90']}</HighlightText>
      </div>
    </div>
  )
}

export default App
