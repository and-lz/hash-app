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
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  padding: 20px;
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
export const ModalBox = styled.div`
  background-color: white;
  width: 320px;
  border-radius: 4px;
  overflow: auto;
  text-align: center;
  border: 1px solid #d1dce3;
  animation: ${slide} 250ms ease 100ms 1 both;
`

export const ModalContent = styled.div`
  padding: 20px 15px;
  background-color: white;
  position: relative;
  z-index: 9;
  width: 90%;
  margin: 0 auto;
  border-radius: 4px;
  margin-top: -30px;
`

export const ModalImage = styled.img.attrs({
  src: 'images/header.jpg',
})`
  width: 100%;
  height: 200px;
  margin-bottom: 0px;
  display: block;
  object-fit: cover;
`
