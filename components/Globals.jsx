import styled, { createGlobalStyle } from 'styled-components';
import BgBlack from '../src/assets/HelloBlack.png';
import BgLight from '../src/assets/HelloWhite.png';
import { motion } from 'framer-motion';
export default createGlobalStyle`


*{
  
 

 
  font-family: 'Montserrat', sans-serif;// 

  *,
  *::after,
  *::before {
 
    box-sizing: border-box;

  }
  ::selection {
      background: ${({ theme }) => theme.Selection};
      color: ${({ theme }) => theme.text};
    }
  html, body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
    max-width: 100%;
   
  }
  li{
    list-style: none;
    color: ${({ theme }) => theme.text};


  }
}

`;
