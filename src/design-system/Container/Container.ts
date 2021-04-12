import styled from 'styled-components'

interface ContainerProps {
  width?: string
}
export const Container = styled.div<ContainerProps>`
  width: ${props => props.width};
`

Container.defaultProps = {
  width: '100%',
}
