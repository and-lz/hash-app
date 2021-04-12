import styled from 'styled-components'
import DesignSystem from '..'

interface LoadBarProps {
  size: number
}

export const LoadBar = styled.div<LoadBarProps>`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: ${props => props.size}%;
  height: 10px;
  background: linear-gradient(
    to left,
    ${DesignSystem.colors.cornflowerBlue},
    ${DesignSystem.colors.steelBlue}
  );
  ${props => {
    if (props.size !== 0) {
      return `transition: all ${DesignSystem.motion.duration} ${DesignSystem.motion.easing};`
    }
  }}
`
