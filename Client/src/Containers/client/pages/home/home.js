import styled from "styled-components";

export const homeContainer = styled.section`
  margin-left: 250px;
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const header = styled.div`
  width: 100%;
`
export const titleHome = styled.h2`
  font-size: 31px;
  color: lightblue;
  font-weight: 400;
`
export const body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; 
`
export const titleTicket = styled.h3`
  
`
export const resume = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  button{
    width: 300px;
    font-size: 19px;
    font-weight: 400;
    text-align: left;
    padding: 15px 12px;
    border-radius: 4px;
    transition: background-color 0.3s ease-in-out;
    color: #fff;

    span{
      font-size: 13px;
      color: #999;
    }
  }
`
export const buttonP = styled.button`
  background-color: rgba(255, 255, 255, 0.04);
  transition: background-color 0.3s ease-in-out;
  &:hover{
    background-color: rgba(255, 255, 255, 0.20);
  }
`