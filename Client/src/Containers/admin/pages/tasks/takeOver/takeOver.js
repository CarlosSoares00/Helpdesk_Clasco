import styled from "styled-components";

export const takeOverContainer = styled.section`
  width: 80%;
  height: fit-content;
  margin-left: 236px;
  margin-top: 86px;
  
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 400px;
`

export const boxSoluction = styled.div`
  width: 680px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const problem = styled.div`
  width: 100%;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px 10px 0 0;
  padding: 10px 20px 20px 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const titleAdmin = styled.h3`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.09);
  margin-bottom: 10px;
`
export const headerProblem = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const btns = styled.div`
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
export const contentAdmin = styled.div`
`
export const containerProblem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`
export const titleProblem = styled.h2`
`
export const descriptionProblem = styled.p`
  width: 100%;
  resize: vertical; 
`




export const formTicketUpdate = styled.form`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;

`
export const boxInput = styled.div`
  display: flex;
  flex-direction: column;
`
export const label = styled.label`
  font-size: 17px;
  font-weight: 700;
`
export const select = styled.select`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 8px 14px 8px 0px;
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
  height: 150px;
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
export const textareaObs = styled.textarea`
  width: 100%;
  height: 70px;
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
  margin-top: 50px;

  button{
    padding: 9px 20px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 16.5px;
  }
`
export const btnSalve = styled.div`
  display: flex;
  gap:15px;  
`
export const btn = styled.button`
  background-color: lightblue;
  color: #fff;
`
export const btnClose = styled.button`
  border: 2px solid #333;
  color: #aaa;
`







export const boxSolic = styled.div`
  height: fit-content;
  padding-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
`
export const headerSolic = styled.header`
`
export const titleSolic = styled.h3`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.09);
  margin-bottom: 10px;
`
export const listDetails = styled.ul`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;

`
export const details = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  span{
    color: bisque;
  }
  p{
    text-align: left;
    font-weight: 700;
    font-size: 17px;
  }
`
export const id = styled.p`
  font-size: 18px;
  font-weight: 700;
`