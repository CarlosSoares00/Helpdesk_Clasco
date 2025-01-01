import styled from "styled-components";


export const sidebarContainer = styled.div`
  height: 100vh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  margin-top: 75px;
  
  position: fixed;
  z-index: 1;
`

export const icons = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`
export const icon = styled.li`
  color: #999;
  padding: 20px 55px 18px 35px;
  display: flex;
  align-items: center;
  
  cursor: pointer;
  transition: .4s ease-in-out;

  a{  
    color: #999;
    font-size: 17px;
    transition: .4s;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 15px;
  }
  i{
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &:hover{
    background-color: #333;
    color: #fff; 
    a{
      color: #fff;
    }
  }
`
