import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-image: ${({ theme }) => theme.DarkMode};
  background-size: contain;
  background-position: bottom;
  background-color: transparent;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  border: none;
  transition: ease 0.5s;
  cursor: pointer;
`;

export default function ButtonChangeIcon({ toggleTheme }) {
  return (
    <ButtonDiv className='App'>
      <Button onClick={toggleTheme}></Button>
    </ButtonDiv>
  );
}
