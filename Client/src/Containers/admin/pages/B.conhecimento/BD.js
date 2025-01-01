import styled from "styled-components";

export const BContainer = styled.section`
  width: 100vw;
  height: 100vh;
`

export const header = styled.header`
  border-bottom: 1.5px solid rgba(255,255,255, .15);  
  height: fit-content;
  margin-inline: 15px;
  
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const titleSection = styled.h2`
  font-size: 30px;
  font-weight: 400;
`
export const buttonsLinks = styled.div`
  display: flex;
  gap: 35px;
`
export const buttonLink = styled.button`
  padding-bottom: 5px;
  font-size: 17px;
  color: #999;
  font-weight: 600;
  transition: .4s ease-in-out;
  
  &:hover{
    color: lightblue;  
  }
`




export const main = styled.main`

`