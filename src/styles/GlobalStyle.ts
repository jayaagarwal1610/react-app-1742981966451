import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #f7f8fa;
  }
  
  #root