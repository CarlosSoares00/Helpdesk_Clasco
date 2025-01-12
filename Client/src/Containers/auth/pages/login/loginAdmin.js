import styled from "styled-components";

export const loginAdminContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b2b8c2;
`
export const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(255,255,255, .4);
  
  display: grid;
  grid-template-columns: 400px 1fr;
  position: relative;
`
export const illustration = styled.div`
  width: 450px;
  background-color: #2929ff;
  display: flex;
  flex-direction: column ;
  gap: 10px;
`
export const headerI = styled.div`
  text-align: center ;
  display: grid;
  gap: 10px;
  
`
export const figure = styled.figure`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: darkblue; */
  img{
    margin-top: 100px;
    width: 400px;
    height: 100%;
  }
`


export const formLogin = styled.div`
  height: 500px;
  background-color: #f6fafd;
  padding: 20px;
  
`
export const headerF = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  h2{
    color: #000;
    font-size: 33px;
  }
  p{
    font-size: 15px;
  }
  a{
    color: #1d1dff;
    text-decoration: underline;
  }
`
export const logo = styled.figure`
  width: 180px;
  height: 40px;
  margin-bottom: 20px;
  img{
    width: 100%;
    height: 100%;
  }
`
export const formSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-inline: 20px;
  
`
export const form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const inputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;

  label{
    color: #718096;
  }
  input{
    
    padding: 10px 15px;
    border: 2px solid #F7FAFC;
    color: #fff;
    border-radius: 12px;
    background-color: #CBD5E0;
    font-size: 16px;
    color: #4A5568;

    &:focus-visible{
      border-color: rgba(255, 255, 255, .7);
    }
  }
`
export const inputExtr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 10px;
`
export const forgetP = styled.div`
  a{
    color: #1d1dff;
    text-decoration: underline;
  }
`
export const btnSubmit = styled.button`
  padding: 12px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  /* background-color: lightblue; */
  background-color: #1d1dff;

`
export const footer = styled.div`

`







