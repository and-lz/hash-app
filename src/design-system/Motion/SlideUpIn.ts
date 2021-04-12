import styled, { css, keyframes } from 'styled-components'
import DesignSystem from 'design-system'

const slideUpInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`

interface SlideInUpProps {
  animate?: boolean
  delay?: number
}

export const SlideInUp = styled.div<SlideInUpProps>`
  ${props => {
    if (props.animate) {
      return css`
        animation: ${slideUpInAnimation} ${DesignSystem.motion.longDuration}
          ${DesignSystem.motion.easing} ${props.delay}ms both;
      `
    }
  }}
`
SlideInUp.defaultProps = {
  animate: false,
  delay: 0,
}
