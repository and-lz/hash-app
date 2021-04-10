import React, { useRef, useState } from 'react'
import Button from '../../components/DesignSystem/Button/Button'
import {
  Card,
  CardHighlight,
  CardMainContent,
} from '../../components/DesignSystem/Card/Card'
import { Divider } from '../../components/DesignSystem/Divider/Divider'
import { Form } from '../../components/DesignSystem/Form/Form'
import Loader from '../../components/DesignSystem/Loader/Loader'
import Modal from '../../components/DesignSystem/Modal/Modal'
import { Spacer } from '../../components/DesignSystem/Spaces/Spaces'
import {
  Heading1,
  Heading2,
} from '../../components/DesignSystem/Typography/Headings'
import { HighlightText } from '../../components/DesignSystem/Typography/Paragraph'
import { Bold } from '../../components/DesignSystem/Typography/Styles'
import Input from '../../components/Input/Input'
import APIAntecipation from '../../infrastructure/api/APIAntecipation/APIAntecipation'
import { formatToCurrency } from '../../infrastructure/format/currency'
import { getFriendlyDayName, mapDaysToInitialData } from './Calculator.helpers'
import { Page } from './Calculator.styles'

interface CalculatorPageProps {
  antecipationDays: number[]
}

function CalculatorPage({ antecipationDays }: CalculatorPageProps) {
  const [showNoConnectionModal, setShowNoConnectionModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const form = (useRef() as unknown) as HTMLFormElement

  const [amount, setAmount] = useState('2000')
  const [installments, setInstallments] = useState('12')
  const [mdr, setMdr] = useState('1')

  const [antecipationValuesData, setAntecipationValuesData] = useState(
    mapDaysToInitialData(antecipationDays),
  )

  async function callApiAntecipationService() {
    setLoadingProgress(0)
    if (!navigator.onLine) {
      setShowNoConnectionModal(true)
      return
    }

    setLoadingProgress(50)
    try {
      const responseAPIAntecipation = await APIAntecipation({
        amount,
        installments,
        mdr,
        antecipationDays,
      })
      setLoadingProgress(75)
      setAntecipationValuesData(responseAPIAntecipation.data)
      setLoadingProgress(100)
    } catch {
      setLoadingProgress(100)
      setShowErrorModal(true)
      setAntecipationValuesData(mapDaysToInitialData(antecipationDays))
    }
  }

  function checkFormValidity() {
    if (form.current.checkValidity()) callApiAntecipationService()
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

      <Modal
        visible={showErrorModal}
        title="Não foi possível completar sua solicitação"
        onClose={() => {
          setShowErrorModal(false)
        }}
        content="Aconteceu algum erro de servidor, não sendo possível completar sua solicitação. Por favor, tente mais tarde."
      />
      <Card width="608px">
        <CardMainContent width="377px">
          <Heading1>Simule sua antecipação</Heading1>
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
              onClick={checkFormValidity}
              type="submit"
              label="Consultar"
            />
          </Form>
        </CardMainContent>
        <CardHighlight width="231px">
          <Heading2>Você receberá:</Heading2>
          <Divider />
          <Spacer size="normal" />
          {antecipationDays.map(day => (
            <HighlightText>
              {getFriendlyDayName(day)}: <br />
              <Bold>{formatToCurrency(antecipationValuesData[day])}</Bold>
            </HighlightText>
          ))}
        </CardHighlight>
      </Card>
    </Page>
  )
}

export default CalculatorPage
