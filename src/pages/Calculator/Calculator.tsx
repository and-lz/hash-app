import Loader from 'components/Loader/Loader'
import Modal from 'components/Modal/Modal'
import { Card, CardHighlight, CardMainContent } from 'design-system/Card/Card'
import { Container } from 'design-system/Container/Container'
import { VerticalSpacer } from 'design-system/Spaces/Spaces'
import { Heading1 } from 'design-system/Typography/Headings'
import APIAnticipation from 'infrastructure/api/APIAnticipation/APIAnticipation'
import React, { useState } from 'react'
import { mapDaysToInitialData } from './Calculator.helpers'
import { Page } from './Calculator.styles'
import CalculatorForm from './CalculatorForm/CalculatorForm'
import CalculatorResult from './CalculatorResult/CalculatorResult'

interface CalculatorPageProps {
  anticipationDays: number[]
}

function CalculatorPage({ anticipationDays }: CalculatorPageProps) {
  const [showNoConnectionModal, setShowNoConnectionModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const [anticipationValuesData, setAnticipationValuesData] = useState(
    mapDaysToInitialData(anticipationDays),
  )

  async function callAnticipationService(
    amount: string,
    installments: string,
    mdr: string,
  ) {
    setLoadingProgress(0)
    if (!navigator.onLine) {
      setShowNoConnectionModal(true)
      return
    }
    setLoadingProgress(50)
    try {
      const responseAPIAnticipation = await APIAnticipation({
        amount,
        installments,
        mdr,
        days: anticipationDays,
      })
      setLoadingProgress(75)
      setAnticipationValuesData(responseAPIAnticipation.data)
      setLoadingProgress(100)
    } catch {
      setLoadingProgress(100)
      setShowErrorModal(true)
      setAnticipationValuesData(mapDaysToInitialData(anticipationDays))
    }
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
        action="OK"
        content="Para consultar os valores, é necessário conexão. Por favor, tente mais tarde."
      />
      <Modal
        visible={showErrorModal}
        title="Não foi possível completar sua solicitação"
        onClose={() => {
          setShowErrorModal(false)
        }}
        action="OK"
        content="Por favor, tente mais tarde."
      />
      <Card width="608px">
        <CardMainContent width="377px">
          <Heading1>Simule sua anticipação</Heading1>
          <VerticalSpacer />
          <Container width="251px">
            <CalculatorForm onSubmit={callAnticipationService} />
          </Container>
        </CardMainContent>
        <CardHighlight width="231px">
          <CalculatorResult
            animate={loadingProgress === 100}
            days={anticipationDays}
            data={anticipationValuesData}
          />
        </CardHighlight>
      </Card>
    </Page>
  )
}

export default CalculatorPage
