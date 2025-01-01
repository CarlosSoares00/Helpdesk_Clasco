import styled from "styled-components";


export const listContainer = styled.div`
  width: 79vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`

export const table = styled.table`
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
  padding: 12px 15px;
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.1);
  a{
    color: lightblue;
    text-decoration: underline;
  }
`
export const tr = styled.tr`
  text-align: left;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
