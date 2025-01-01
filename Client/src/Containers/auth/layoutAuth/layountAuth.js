import styled from "styled-components";


export const layountAuthContainer = styled.div`

`

export const header = styled.div`
  width: 100vw;
  height: 60px;
  padding-inline: 15px;
  background-color: #1a1a1a;
  border-bottom: 1px solid #333;
    
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  position: fixed;
  z-index: 1;

`

export const logo = styled.h1`
  font-size: 38px;
  font-weight: 700;
  /* color: #b3dff2; */
  
`

export const auth = styled.div`
  display: flex;
  gap: 10px;
`

export const button = styled.button`
  color: #fff;
  font-size: 14px;
  padding: 10px;
  font-weight: 700;
  border-radius: 6px;
  background-color: rgba(255,255,255, .15);
  transition: background-color .4s ease;
  
  &:hover{
    background-color: lightblue;
  }
`