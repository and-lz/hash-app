import styled from 'styled-components'

interface ModalProps {
  visible: boolean
}
export const ModalBackground = styled.div<ModalProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  padding: 60px 100px 0;
  backdrop-filter: blur(10px);
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: all 250ms ease;
  ${props => {
    if (props.visible) {
      return `
        pointer-events: auto;
        opacity: 1;
      `
    }
  }}
`

export const Modal = styled.div`
  background-color: white;
  width: 400px;
  padding: 40px 50px;
  border-radius: 4px;
  overflow: auto;
  text-align: center;
`
