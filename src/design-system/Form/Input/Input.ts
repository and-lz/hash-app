import styled from 'styled-components'
import DesignSystem from 'design-system'

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid ${DesignSystem.colors.mystic};
  border-radius: 4px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  transition: all ${DesignSystem.motion.duration} ${DesignSystem.motion.easing};
  display: block;
  width: 100%;
  appearance: none;
  @media (${DesignSystem.breakpoints.tablet}) {
    font-size: 14px;
  }
  &:focus {
    outline: 0;
    border-color: ${DesignSystem.colors.cornflowerBlue}};
  }
  &:invalid {
    border-color: red;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance: textfield;
  }
`
