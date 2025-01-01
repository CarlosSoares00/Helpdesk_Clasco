import styled from "styled-components";


export const constainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const formRegister = styled.form`
  display: grid;
  grid-template-columns: 1fr 300px;
  
`
export const regisrterLeft = styled.div`
  padding: 30px;
  border-radius: 5px 0 0 5px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: rgba(255,255,255, .10);
`
export const registerRight = styled.div`
  padding: 35px 30px;
  border-radius: 0 5px 5px 0;
  background-color: rgb(143 143 143 / 10%);
  display: flex;
  flex-direction: column;
  gap: 10px;


  h2{
    font-size: 25px;
  }

  button{
    width: fit-content;
    border: 1px solid #999;
    padding: 10px;
  }
`



export const titleBox = styled.h2`
  font-size: 32px;
  color: #b3dff2;
`
export const princ = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input{
    padding: 7px 12px;
    border: 2px solid rgba(255, 255, 255, .7);
    color: #fff;
    font-size: 17px;
    border-radius: 4px;

    &:focus-visible{
      border-color: rgba(255, 255, 255, .7);
    }
  
  }
`
export const infoLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const groupp = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  .email{
    width: 70%;
  }
`


export const inputgroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  
  input{
    width: 100%;
  }
`
export const selectGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const selectDep = styled.select`
  padding: 5px 10px;
  border: 2px solid rgba(255, 255, 255, .7);
  color: #555;
  font-size: 17px;
  border-radius: 4px;
`
export const nameContent = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  input{
    width: 100%;
  }
`




export const boxButtonSub = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    width: 100px;
    padding: 10px 10px;
    color: #fff;
    border-radius: 4px;
    font-size: 15px;
    font-weight: bold;
    transition: .4s ease;
  }
`
export const btnSub = styled.button`
  background-color: rgba(255, 255, 255, .1);
  &:hover{
    background-color: rgba(255, 255, 255, .40);
  }
`
export const btnCanc = styled.button`  
  background-color: rgba(255, 255, 255, .1);
  
  &:hover{
    background-color: rgba(179, 59, 59, 100%);
  }
`