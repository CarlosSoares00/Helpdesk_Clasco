import styled from "styled-components";



export const groupContainer = styled.section`
  width: 81.5%;
  margin-left: 230px;
  margin-top: 80px;
`

export const title = styled.h2`
  font-size: 30px;
  font-weight: 400;
`

export const header = styled.div`
  display: flex;
  align-items: center;
  
  gap: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #333;
`
export const modalCreate = styled.button`
  padding: 8px 13px;
  color: #fff;
  font-size: 15px;
  border-radius: 4px;
  transition: background-color .4s ease;
  background-color: rgba(255,255,255, .10);

  &:hover{
    background-color: rgba(255,255,255, .20);
    filter: brightness(1.2);
  }
`



export const groupContent = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const group =styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const titleGroup = styled.h3`
  font-size: 25px;
  font-weight: 400;
`
export const headerGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const btnControl = styled.div`
  color: #555;  
  font-size: 26px;
  
  display: flex;
  gap: 7px;
  align-items: center;
  margin-right: 25px;
  
  i{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{
      color: #fff;
    }
  }

  
`



export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 26px;
`
export const groupList = styled.li`
  width:290px;
  height: 160px;
  border: 1px solid #333;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  padding: 25px;

  cursor: pointer;
  transition: all.4s ease-in-out;

  &:hover{

    
    box-shadow: 0px 0px 4px 0px #fff;
    border-color: #fff;

    p{
      color: #fff;
    }
  }
`
export const groupSig = styled.h4`
  width: fit-content;
  padding: 8px;
  font-size: 19px;
  font-weight: 600;
  background-color:  #92becd;
  border-radius: 3px;
  color: #fff;

`
export const titleGroup2 = styled.p`
  font-size: 18px;
  color: #999;
  transition: .4s;
`


