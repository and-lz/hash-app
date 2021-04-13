import styled from 'styled-components'
import DesignSystem from 'design-system'

interface CardProps {
  width: string
}

export const Card = styled.div<CardProps>`
  background: #ffffff;
  box-sizing: border-box;
  width: 100%;
  transition: all ${DesignSystem.motion.duration} ${DesignSystem.motion.easing};
  &:focus-within {
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  }
  @media (${DesignSystem.breakpoints.tablet}) {
    border-radius: 4px;
    border: 1px solid #d1dce3;
    width: ${props => props.width};
    display: flex;
  }
`

interface CardAreaProps {
  width?: string
}
export const CardArea = styled.div<CardAreaProps>`
  @media (${DesignSystem.breakpoints.tablet}) {
    width: ${props => props.width};
  }
`

export const CardMainContent = styled(CardArea)`
  padding: 20px 28px;
  @media (${DesignSystem.breakpoints.tablet}) {
    padding: 41px 56px;
  }
`

export const CardHighlight = styled(CardArea)`
  background: rgba(209, 220, 227, 0.18);
  border-radius: 4px;
  padding: 20px 28px;
  @media (${DesignSystem.breakpoints.tablet}) {
    padding: 83px 35px 20px;
  }
`
