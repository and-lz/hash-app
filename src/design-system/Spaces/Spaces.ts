import styled from 'styled-components'

interface VerticalSpacerProps {
  size: 'tiny' | 'normal' | 'big' | 'huge'
}
const mapSpacesToPixels = {
  tiny: 5,
  normal: 20,
  big: 30,
  huge: 40,
}
export const VerticalSpacer = styled.span.attrs(
  (props: VerticalSpacerProps) => ({
    size: props.size || 'normal',
  }),
)`
  border: 0px solid;
  margin-bottom: ${props => mapSpacesToPixels[props.size]}px;
  display: block;
`
