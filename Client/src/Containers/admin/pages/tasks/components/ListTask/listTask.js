import styled from "styled-components";

export const listTaskContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-inline: 16px;
  margin-top: 15px;
`

export const buttonSearch = styled.button`
  padding: 11px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, .8);
  border: 2px solid rgba(255, 255, 255, .15);
`
export const table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.05);
  

tbody{
  font-size: 14px;
}

`
export const th = styled.th`
  padding: 12px 15px;
  text-align: left;

  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.2);
`
export const td = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  
  padding: 12px 15px;
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.1);
  a{
    color: lightblue;
    text-decoration: underline;
  }
`
export const tdPr = styled.td`

`

export const tr = styled.tr`
  text-align: left;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
export const iconConfig = styled.i`
  
  color: rgba(255, 255, 255, .1);
  transition: all 0.4s ease;

  &:hover {
    color: #fff;
    cursor: pointer;
  } 
`
export const buttonCheck = styled.button`
  font-size: 18px;
  color: rgba(255, 255, 255, .8);
`
export const selectTh = styled.select`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  
  option{
    background-color: #333;
    
  }
`