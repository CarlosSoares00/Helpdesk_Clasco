import styled from "styled-components";

export const loginConstainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const content = styled.div`
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr 300px;
`
export const formContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  border-radius: 5px 0 0 5px;
  background-color: rgba(255,255,255, .10);
  
  padding: 30px;
`

export const boxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span{
    font-size: 14px;
    
  }
`
export const title = styled.h2`
  font-size: 32px;
  color: #b3dff2;
`
export const form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 15px;
`
export const input = styled.input`
  width: 365px;
  padding: 10px 15px;
  border: 2px solid rgba(255, 255, 255, .7);
  color: #fff;
  font-size: 18px;
  border-radius: 4px;

  &:focus-visible{
    border-color: rgba(255, 255, 255, .7);
  }
  
`
export const buttonLink = styled.button`
  width: fit-content;
  /* padding: 5px 10px; */
  /* background-color: darkblue; */
  font-size: 14px;
  color: blue;
  text-decoration: underline;
`
export const buttonLogin = styled.button`
  width: 100px;
  padding: 10px 10px;
  /* background-color: lightblue; */
  background-color: rgba(255, 255, 255, .1);
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  transition: .4s ease;

  &:hover{
    background-color: rgba(255, 255, 255, .40);
  }
`

export const boxContainer = styled.div`
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