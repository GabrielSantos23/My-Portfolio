import styled, { createGlobalStyle } from 'styled-components';
import BgBlack from '../src/assets/HelloBlack.png';
import BgLight from '../src/assets/HelloWhite.png';
import { motion } from 'framer-motion';
export default createGlobalStyle`
  *,
  *::after,
  *::before {
 
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

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
    font-family: sans-serif;
    transition: all 0.25s linear;
    max-width: 100%;
    overflow-x: hidden;
   
  }
  li{
    list-style: none;
    color: ${({ theme }) => theme.text};


  }
  

`;
