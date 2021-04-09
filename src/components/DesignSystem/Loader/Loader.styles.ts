import styled from 'styled-components'

interface LoadBarProps {
  size: number
}

export const LoadBar = styled.div<LoadBarProps>`
  position: fixed;
  z-index: 9999;
  width: ${props => props.size}%;
  height: 3px;
  background: linear-gradient(to right, #5d9cec, #3d75bb);
  ${props => {
    if (props.size !== 0) {
      return `transition: all 250ms ease;`
    }
  }}
`
