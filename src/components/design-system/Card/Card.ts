import styled from 'styled-components'

interface CardProps {
  width: string
}

export const Card = styled.div<CardProps>`
  background: #ffffff;
  border: 1px solid #d1dce3;
  box-sizing: border-box;
  border-radius: 4px;
  width: ${props => props.width};
  display: flex;
`

interface CardAreaProps {
  width?: string
}
export const CardArea = styled.div<CardAreaProps>`
  width: ${props => props.width};
`

export const CardMainContent = styled(CardArea)`
  padding: 41px 56px;
`

export const CardHighlight = styled(CardArea)`
  background: rgba(209, 220, 227, 0.18);
  border-radius: 4px;
  padding: 83px 35px 20px;
`
