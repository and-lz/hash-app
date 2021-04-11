import { Divider } from 'design-system/Divider/Divider'
import { Spacer } from 'design-system/Spaces/Spaces'
import { Heading2 } from 'design-system/Typography/Headings'
import { HighlightText } from 'design-system/Typography/Paragraph'
import { Bold } from 'design-system/Typography/Styles'
import { formatToCurrency } from 'infrastructure/format/currency'
import React from 'react'
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
        <HighlightText key={day}>
          <span data-testid="day">{getFriendlyDayName(day)}:</span> <br />
          <Bold data-testid="value">{formatToCurrency(data[day])}</Bold>
        </HighlightText>
      ))}
    </>
  )
}

export default CalculatorResult
