import styled from "styled-components";

export const loginAdminContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const formContainer = styled.div`
  border-radius: 10px;
  background-color: rgba(255,255,255, .10);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

`
export const boxText = styled.div`
  display: flex;
  flex-direction: column;
  span{
    font-size: 14px;
  }
`
export const title = styled.h2`
  font-size: 32px;
  color: #b3dff2;
`
export const form = styled.form`
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
  font-size: 14px;
  color: blue;
  text-decoration: underline;
`
export const buttonLogin = styled.button`
  padding: 10px 10px;
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