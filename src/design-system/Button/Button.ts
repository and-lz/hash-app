import styled from 'styled-components'
import DesignSystem from 'design-system'

interface FlatButtonProps {
  onClick: Function
}

export const FlatButton = styled.button<FlatButtonProps>`
  border-radius: 999px;
  background: ${DesignSystem.colors.catskillWhite};
  color: ${DesignSystem.colors.doveGray};
  padding: 10px 60px;
  font-size: 16px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  border: 0;
  display: block;
  width: 100%;
  transition: all ${DesignSystem.motion.duration} ${DesignSystem.motion.easing};
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(95%);
    transform: scale(0.99);
  }
`
