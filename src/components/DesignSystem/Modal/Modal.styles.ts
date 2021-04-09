import styled, { keyframes } from 'styled-components'

interface ModalProps {
  visible: boolean
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const ModalBackground = styled.div<ModalProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  padding: 60px 100px 0;
  backdrop-filter: blur(5px);
  align-items: center;
  animation: ${fadeIn} 250ms ease 1 forwards;
`

const slide = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`
export const Modal = styled.div`
  background-color: white;
  width: 380px;
  padding: 40px 50px;
  border-radius: 4px;
  overflow: auto;
  text-align: center;
  animation: ${slide} 250ms ease 100ms 1 both;
`
