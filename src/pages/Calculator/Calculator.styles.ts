import styled from 'styled-components'
import DesignSystem from 'design-system'

export const Page = styled.div`
  background-color: ${DesignSystem.colors.catskillWhite};
  display: grid;
  place-items: center;
  min-height: 100%;
  @media (${DesignSystem.breakpoints.tablet}) {
    padding: 20px;
  }
`
