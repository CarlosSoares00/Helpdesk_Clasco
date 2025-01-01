import styled from "styled-components";

export const taskContainer = styled.section`
  width: 81.5%;
  margin-left: 230px;
  margin-top: 80px;
`
export const header = styled.div`
  height: fit-content;
  margin-inline: 15px;
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 15px;
`
export const headerContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
` 
export const searchBox = styled.form`
  width: 100%;
  display: flex;
  gap: 7px;
  align-items: center;
  padding: 10px;
`
export const searchTask = styled.input`
  padding: 10px 15px;
  border: 2px solid rgba(255, 255, 255, .15);
  color: #fff;
  font-size: 15px;
  border-radius: 4px;

  &:focus-visible{
    border-color: rgba(255, 255, 255, .7);;
  }
`
export const buttonSearch = styled.button`
  padding: 11px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, .8);
  border: 2px solid rgba(255, 255, 255, .15);
  border-radius: 4px;
`
export const buttonFilter = styled.button`
  padding: 11px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, .8);
  border: 2px solid rgba(255, 255, 255, .15);
  border-radius: 4px;
  transition: .4s;

  &:hover{
    background-color: lightblue;
    cursor: pointer;
    color: #333;
  }
`
export const title = styled.h2`
  font-size: 30px;
  font-weight: 400;
`
export const main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`



export const resume = styled.div`
  margin-inline: 15px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  
  button{
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    padding: 15px 12px;
    border-radius: 4px;
    transition: background-color 0.3s ease-in-out;
    color: #fff;

    span{
      font-size: 12px;
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
