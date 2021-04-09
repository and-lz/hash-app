import React, { useState } from 'react'
import {
  Card,
  CardHighlight,
  CardMainContent,
} from '../../components/design-system/Card/Card'
import Modal from '../../components/design-system/Modal/Modal'
import { Spacer } from '../../components/design-system/Spaces/Spaces'
import {
  Heading1,
  Heading2,
} from '../../components/design-system/Typography/Headings'
import { HighlightText } from '../../components/design-system/Typography/Paragraph'
import Input from '../../components/Input/Input'
import APIAntecipation from '../../infrastructure/api/API/APIAntecipation/APIAntecipation'
import { Page } from './Home.styles'

function HomePage() {
  const [showModal, setModal] = useState(false)
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

  return (
    <Page>
      <Modal
        visible={showModal}
        title="Você está sem conexão"
        onClose={() => {
          setModal(false)
        }}
        content="Para consultar os valores, é necessário conexão. Por favor, tente mais tarde."
      />
      <Card width="608px">
        <CardMainContent width="377px">
          <Heading1>Simule sua antecipação</Heading1>
          <Input
            onChange={(value: string) => setAmount(value)}
            required
            label="Informe o valor da renda"
            value={amount}
          />
          <Spacer />
          <Input
            onChange={(value: string) => setInstallments(value)}
            required
            label="Em quantas parcelas"
            value={installments}
            addon="Máximo de 12 parcelas"
          />
          <Spacer />
          <Input
            onChange={(value: string) => setMdr(value)}
            required
            label="Informe o percentual de MDR"
            value={mdr}
          />
          <button onClick={() => setModal(true)}>consultar</button>
        </CardMainContent>
        <CardHighlight width="231px">
          <Heading2>Você receberá:</Heading2>
          <HighlightText>Amanhã: R$ 0</HighlightText>
          <HighlightText>Em 15 dias: R$ {data['30']}</HighlightText>
          <HighlightText>Em 30 dias: R$ {data['60']}</HighlightText>
          <HighlightText>Em 90 dias: R$ {data['90']}</HighlightText>
        </CardHighlight>
      </Card>
    </Page>
  )
}

export default HomePage
