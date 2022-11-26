import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { MdClose, MdMenu, MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';

import { IoClose } from 'react-icons/io5';
import { useTransition, animated, config } from 'react-spring';
import { Link } from 'react-router-dom';
const SBmobile = styled.section`
  display: none;
  @media (max-width: 1268px) {
    display: flex;
    position: absolute;
    width: 100%;
    height: 93%;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 200;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.body};

    opacity: 0;
    pointer-events: none;
    transition: 0.5s;

    nav {
      display: flex;
      color: ${({ theme }) => theme.text};
      align-items: center;
      flex-direction: column;
      gap: 2rem;
    }

    ${({ isVisible }) =>
      isVisible &&
      css`
        opacity: 1;
        pointer-events: auto;

        svg {
          transform: rotate(0deg);
        }
      `}
  }
`;
const IoClose1 = styled(IoClose)`
  position: absolute;
  top: 3rem;
  right: 4rem;
  transform: rotate(45deg);
  transition: 0.5s;
`;

const Linka = styled(Link)``;

export default function SidebarMobile({
  menuIsVinsible,
  setMenuVisible,
  theme,
  setTheme,
}) {
  const toggleTheme = () => {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  useEffect(() => {
    document.body.style.overflowY = menuIsVinsible ? 'hidden' : 'auto';
  }, [menuIsVinsible]);
  return (
    <SBmobile isVisible={menuIsVinsible}>
      {' '}
      <nav>
        <Linka
          to={'/'}
          style={{ textDecoration: 'none' }}
          className='nav-link active'
        >
          <li onClick={() => setMenuVisible(false)}>Home</li>
        </Linka>
        <Link to={'about'} style={{ textDecoration: 'none' }}>
          <li onClick={() => setMenuVisible(false)}>About</li>
        </Link>
        <Link to={'projects'} style={{ textDecoration: 'none' }}>
          <li onClick={() => setMenuVisible(false)}>ProJects</li>
        </Link>
        <Link to={'resume'} style={{ textDecoration: 'none' }}>
          <li onClick={() => setMenuVisible(false)}>Resume</li>
        </Link>
        <Link to={'contact'} style={{ textDecoration: 'none' }}>
          <li onClick={() => setMenuVisible(false)}>Contact</li>
        </Link>
      </nav>
    </SBmobile>
  );
}
