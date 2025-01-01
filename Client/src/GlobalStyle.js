import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    color: #fff;
    background-color: #1a1a1a;
    font-family: sans-serif;
    
}

a, li{
  list-style: none;
  text-decoration: none;

}
input, select, button{
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

section{
  width: 92.8vw;  
  margin-left: 90px;
  margin-top: 70px;  
}

`


