import styled from "styled-components";

export const headerContainer = styled.div`
  width: 100%;
  padding-block: 15px;
  padding-inline: 35px;
  background-color: #1a1a1a;
  border-bottom: 1px solid #333;
    
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  position: fixed;
  z-index: 1;
`
export const logo = styled.h1`
  font-size: 35px;
  font-weight: 400;
`
export const settings = styled.div`
  width: fit-content;
  height: 30px;
  
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`
export const btnIcon = styled.button`
  color: #fff;
  font-size: 21px;
  padding: 9px 10px;
  background-color: rgba(255,255,255, .10);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: background-color .4s ease;

  &:hover{
  background-color: rgba(255,255,255, .20);
  filter: brightness(1.2);
  }
`

export const account = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;

  border-radius: 50px 20px 20px 50px;
  transition: all.4s ease-in-out;
  padding-right: 10px;
  &:hover{
    background-color: #333;
  }
`
export const figureUser = styled.figure`
  width: 40px;
  height: 40px;

  img{
    width: 100%;
    height: 100%;
    clip-path: circle();
}
`
export const userContent = styled.div`
  font-size: 15px;
  display: grid;
  align-items: center;  
`


export const btnTicket = styled.button`
  color: #fff;
  font-size: 15px;
  padding: 10px;
  font-weight: 700;
  border-radius: 6px;
  background-color: rgba(255,255,255, .10);
  transition: background-color .4s ease;
  
  &:hover{
    background-color: rgba(255,255,255, .20);
  }
`