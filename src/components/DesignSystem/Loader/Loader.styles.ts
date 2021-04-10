import styled from 'styled-components'
import DesignSystem from '..'

interface LoadBarProps {
  size: number
}

export const LoadBar = styled.div<LoadBarProps>`
  position: fixed;
  z-index: 9999;
  width: ${props => props.size}%;
  height: 10px;
  background: linear-gradient(to right, #5d9cec, #3d75bb);
  ${props => {
    if (props.size !== 0) {
      return `transition: all ${DesignSystem.motion.duration} ${DesignSystem.motion.easing};`
    }
  }}
`
