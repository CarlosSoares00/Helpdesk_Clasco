import styled from "styled-components";

export const usersContainer = styled.section`
  width: 81.5%;
  margin-left: 245px;
  margin-top: 90px;

  display: flex;
  gap: 20px;
  flex-direction: column;
`

export const header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const titleSection = styled.div`

  h2{
    font-size: 30px;
    font-weight: 200;
  }
  p{

  }
`
export const form = styled.form`
  display: flex;
  gap: 10px;
`
export const select = styled.select`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 2px 14px 2px 10px;
  border: 1px solid #444;
  font-size: 16.5px;
  border-radius: 4px;

  option{
    background-color: #333;
    color: #fff;
  }
`
export const label = styled.label`

`

export const equipContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 6px;
`


export const equip = styled.li`
  width: 360px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;

`
export const headerEquip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const titleEquip = styled.h3`
 font-weight: 900;

`
export const btnHeader = styled.button`
  button{
    font-size: 18px;
    border: 10px;
    color: #999;
  }
`

export const equipDetalhe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 15px;
`
export const equipfoto = styled.figure`
  width: 140px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 120px;
    height: 100px;
  }
`
export const detalhes = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const detalhe = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: left; */
  gap: 10px;
`
export const span = styled.span`
  color: #999; 
  font-size: 14px;
  `
export const dado = styled.p`
  font-weight: 900;
  font-size: 15px;

`


export const equipFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const btnF = styled.button`
  border-radius: 8px;
  font-weight: 900;
  border: 1px solid #333;
  padding: 5px 14px 5px 14px;
  color: #fff;
`