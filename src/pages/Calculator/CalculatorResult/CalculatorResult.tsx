import { Divider } from 'design-system/Divider/Divider'
import { SlideInUp } from 'design-system/Motion/SlideUpIn'
import { VerticalSpacer } from 'design-system/Spaces/Spaces'
import { Heading2 } from 'design-system/Typography/Headings'
import { HighlightText } from 'design-system/Typography/Paragraph'
import { Bold } from 'design-system/Typography/Styles'
import { formatToCurrency } from 'infrastructure/currency/currency'
import React from 'react'
import { getFriendlyDayName } from '../Calculator.helpers'

interface ResultProps {
  days: number[]
  data: any
  animate: boolean
}

function CalculatorResult({ days, data, animate }: ResultProps) {
  return (
    <>
      <Heading2>Você receberá:</Heading2>
      <Divider />
      <VerticalSpacer size="normal" />
      {days.map((day: number, index: number) => (
        <SlideInUp animate={animate} delay={100 * index} key={day}>
          <HighlightText data-testid="result-row">
            <span>{getFriendlyDayName(day)}:</span> <br />
            <VerticalSpacer size="tiny" />
            <Bold>{formatToCurrency(data[day])}</Bold>
          </HighlightText>
          <VerticalSpacer />
        </SlideInUp>
      ))}
    </>
  )
}

export default CalculatorResult
