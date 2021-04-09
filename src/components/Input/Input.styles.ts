import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 6px;
`

export const InputField = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #dde6e9;
  border-radius: 4px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  transition: all 200ms ease;
  display: block;
  width: 100%;
  &:focus {
    outline: 0;
    border-color: #66afe9;
  }
`

export const Addon = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 14px;
  color: #cecece;
`
