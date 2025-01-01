import styled from "styled-components";

export const ticketContainer = styled.section`
  margin-left: 250px;
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
`
export const title = styled.h2`
    font-size: 24px;
    color: lightblue;
    font-weight: 400;
    text-transform: uppercase;
`
export const headerForm = styled.div`
  
`

export const formTicket = styled.form`
  width: 79vw;
  height: fit-content;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.04);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 16.5px;
`
export const formTitle = styled.h3`
  font-size: 25px;
  color: lightblue;
  text-transform: uppercase;
`
export const formGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px ;

  input {
    width: 100%;
    padding: 10px 10px;
    border: 1px solid #444;
    border-radius: 4px;
    font-size: 17px;
    color: #aaa;
  }
`
export const formGroup1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: 20px ;

  select{
    width: 100%;
  }
`
export const formGroup2 = styled.div`
  display: flex;
  gap: 20px;
`
export const boxEqui = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
`
export const boxPro = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const label = styled.label`
  font-size: 17px;
  font-weight: 700;
`
export const select = styled.select`
  color: #fff;
  padding: 12px 14px 12px 0px;
  border: 1px solid #444;
  font-size: 16.5px;
  border-radius: 4px;

  option{
    background-color: #333;
    color: #fff;
  }
`
export const textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 1rem;
  color: #333;
  background-color: #f9f9f9;  
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  resize: vertical; 

  &:focus {
      border-color: #333;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      outline: none;
      background-color: #fff;
    }

  &::placeholder {
    color: #aaa;
  }

`

export const btnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; 

  button{
    padding: 9px 20px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 16.5px;
  }
  
`
export const btnSalve = styled.button`
  background-color: lightblue;
  color: #fff;
`
export const btnClose = styled.button`
  border: 2px solid #333;
  color: #aaa;
`










