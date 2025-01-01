import styled from "styled-components";

export const viewsContainer = styled.section`
  width: 79%;
  height: fit-content;
  margin-left: 246px;
  margin-top: 76px;
  

  /* display: flex;
  align-items: center;
  justify-content: center; */
`

export const viewDoc = styled.div`
  width: 900px;
  padding: 19px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  
  display: flex;
  flex-direction: column;
  gap: 40px;
`
export const headerDoc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const groupButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button{
    font-size: 14.8px;
    font-weight: 600;
    padding: 7px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const btnPlus = styled.button`
  font-size: 14.8px;
  padding: 7px 10px;
  border-radius: 5px;
  color: rgba(255, 255, 255, .8);
  background-color: rgba(255, 255, 255, 0.1);
`

export const content = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 45px;
`

export const from = styled.div`
  display: flex;
  align-items: center;
`
export const listContent = styled.ul`
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  gap: 13px; 

  li{
    display: flex;
    align-items: center;
  }
`
export const list = styled.li`
  font-weight: bold;
  text-transform: capitalize;
`

export const detalhes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const description = styled.p`
  resize: vertical; 
`
export const titleTicket = styled.p`
  font-size: 25px;
  font-weight: bold;
`





export const boxProblem = styled.div``

export const viewDetalhes = styled.div`
  background-color: green;
`