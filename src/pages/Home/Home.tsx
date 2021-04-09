import React, { useState } from 'react'
import Button from '../../components/DesignSystem/Button/Button'
import {
  Card,
  CardHighlight,
  CardMainContent,
} from '../../components/DesignSystem/Card/Card'
import Loader from '../../components/DesignSystem/Loader/Loader'
import Modal from '../../components/DesignSystem/Modal/Modal'
import { Spacer } from '../../components/DesignSystem/Spaces/Spaces'
import {
  Heading1,
  Heading2,
} from '../../components/DesignSystem/Typography/Headings'
import { HighlightText } from '../../components/DesignSystem/Typography/Paragraph'
import Input from '../../components/Input/Input'
import APIAntecipation from '../../infrastructure/api/API/APIAntecipation/APIAntecipation'
import { Page } from './Home.styles'

function HomePage() {
  const [showNoConnectionModal, setShowNoConnectionModal] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [amount, setAmount] = useState('2000')
  const [installments, setInstallments] = useState('12')
  const [mdr, setMdr] = useState('5')

  const [data, setData] = useState({
    30: 0,
    60: 0,
    90: 0,
  })

  const callApiAntecipationService = async function () {
    setLoadingProgress(0)
    if (!navigator.onLine) {
      setShowNoConnectionModal(true)
      return
    }

    setLoadingProgress(50)
    const responseAPIAntecipation = await APIAntecipation({
      amount,
      installments,
      mdr,
      days: [30, 60, 90],
    })
    setLoadingProgress(75)
    setData(responseAPIAntecipation.data)
    setLoadingProgress(100)
  }

  return (
    <Page>
      <Loader size={loadingProgress} />
      <Modal
        visible={showNoConnectionModal}
        title="Você está sem conexão"
        onClose={() => {
          setShowNoConnectionModal(false)
        }}
        content="Para consultar os valores, é necessário conexão. Por favor, tente mais tarde."
      />
      <Card width="608px">
        <CardMainContent width="377px">
          <Heading1>Simule sua antecipação</Heading1>
          <form
            onSubmit={e => {
              e.preventDefault()
              callApiAntecipationService()
            }}
          >
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
            <Button
              onClick={callApiAntecipationService}
              type="submit"
              label="Consultar"
            />
          </form>
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
