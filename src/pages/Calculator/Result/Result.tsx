import React from 'react'
import { Divider } from '../../../components/DesignSystem/Divider/Divider'
import { Spacer } from '../../../components/DesignSystem/Spaces/Spaces'
import { Heading2 } from '../../../components/DesignSystem/Typography/Headings'
import { HighlightText } from '../../../components/DesignSystem/Typography/Paragraph'
import { Bold } from '../../../components/DesignSystem/Typography/Styles'
import { formatToCurrency } from '../../../infrastructure/format/currency'
import { getFriendlyDayName } from '../Calculator.helpers'

interface ResultProps {
  days: number[]
  data: any
}

function CalculatorResult({ days, data }: ResultProps) {
  return (
    <>
      <Heading2>Você receberá:</Heading2>
      <Divider />
      <Spacer size="normal" />
      {days.map((day: number) => (
        <HighlightText>
          {getFriendlyDayName(day)}: <br />
          <Bold>{formatToCurrency(data[day])}</Bold>
        </HighlightText>
      ))}
    </>
  )
}

export default CalculatorResult
