import styled from 'styled-components'
import DesignSystem from 'design-system'

interface ContainerProps {
  width?: string
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  @media (${DesignSystem.breakpoints.tablet}) {
    width: ${props => props.width};
  }
`

Container.defaultProps = {
  width: '100%',
}
