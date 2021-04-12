import styled from 'styled-components'
import DesignSystem from '..'

interface FlatButtonProps {
  onClick: Function
}

export const FlatButton = styled.button<FlatButtonProps>`
  border-radius: 999px;
  background: #5d9cec;
  color: white;
  padding: 10px 60px;
  font-size: 16px;
  font-family: Source Sans Pro;
  font-style: normal;
  border: 0;
  transition: all ${DesignSystem.motion.duration} ${DesignSystem.motion.easing};
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(95%);
    transform: scale(0.99);
  }
`