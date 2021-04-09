import styled from 'styled-components'

interface SpacerProps {
  size: 'tiny' | 'normal' | 'big' | 'huge'
}
const mapSpacesToPixels = {
  tiny: 5,
  normal: 20,
  big: 30,
  huge: 40,
}
export const Spacer = styled.hr.attrs((props: SpacerProps) => ({
  size: props.size || 'normal',
}))`
  border: 0px solid;
  margin-bottom: ${props => mapSpacesToPixels[props.size]}px;
`
