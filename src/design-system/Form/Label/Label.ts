import styled from 'styled-components'
import DesignSystem from 'design-system'

export const Label = styled.label`
  display: block;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 6px;
  color: #656565;
`

export const Addon = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 14px;
  color: ${DesignSystem.colors.alto};
`
