import React, { useState } from 'react'
import { Card, CardHighlight, CardMainContent } from 'design-system/Card/Card'
import Loader from 'components/Loader/Loader'
import Modal from 'components/Modal/Modal'
import { Heading1 } from 'design-system/Typography/Headings'
import APIAntecipation from 'infrastructure/api/APIAntecipation/APIAntecipation'
import { mapDaysToInitialData } from './Calculator.helpers'
import { Page } from './Calculator.styles'
import CalculatorForm from './CalculatorForm/CalculatorForm'
import CalculatorResult from './CalculatorResult/CalculatorResult'

interface CalculatorPageProps {
  antecipationDays: number[]
}

function CalculatorPage({ antecipationDays }: CalculatorPageProps) {
  const [showNoConnectionModal, setShowNoConnectionModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const [antecipationValuesData, setAntecipationValuesData] = useState(
    mapDaysToInitialData(antecipationDays),
  )

  async function callAntecipationService(
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
      const responseAPIAntecipation = await APIAntecipation({
        amount,
        installments,
        mdr,
        days: antecipationDays,
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
          <Heading1>Simule sua antecipação</Heading1>
          <CalculatorForm onSubmit={callAntecipationService} />
        </CardMainContent>
        <CardHighlight width="231px">
          <CalculatorResult
            days={antecipationDays}
            data={antecipationValuesData}
          />
        </CardHighlight>
      </Card>
    </Page>
  )
}

export default CalculatorPage
