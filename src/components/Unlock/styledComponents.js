// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161617;
`
export const CardContainer = styled.div`
  height: 50vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Img = styled.img`
  height: 100px;
  width: 100px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 400;
  color: #ffffff;
`
export const Button = styled.button`
  height: 40px;
  width: 80px;
  font-family: 'Roboto';
  font-size: 15px;
  background-color: #06b6d4;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`
