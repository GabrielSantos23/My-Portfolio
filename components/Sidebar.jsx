import React, { useEffect, useState, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/theme';
import GlobalTheme from '../components/Globals';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../src/assets/octagon-active.png';
import LogoBlack from '../src/assets/blackLogo.png';
import { useSpring, animated } from 'react-spring';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonChangeIcon from './ButtonChangeIcon';
import { Divide as Hamburger } from 'hamburger-react';
import './teste.css';
const Button = styled.button`
  height: 25px;
  width: 30;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  @media (max-width: 1268px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 10px;
  position: relative;
  text-decoration: none;
  width: 65%;
  align-items: center;
  @media (max-width: 1268px) {
    width: 100%;
  }

  li::before {
    color: white;
  }
`;
const LinkList = styled(NavLink)`
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${({ theme }) => theme.text};

  @media (max-width: 1268px) {
    display: none;
  }

  ::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #58e0c1;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover::after {
    width: 100%;
    left: 0;
  }
`;
const MobileNightEsun = styled.li`
  display: none;
  @media (max-width: 1268px) {
    display: flex;
    z-index: 10;
  }
`;
const Li = styled.li`
  display: none;
  @media (max-width: 1268px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
const Dark = styled.li`
  display: block;
  @media (max-width: 1268px) {
    display: none;
  }
`;
const BurguerMenu = styled.div`
  display: none;
  @media (max-width: 1268px) {
    height: 100%;
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    cursor: pointer;
    z-index: 10;
    .burguer-bar {
      width: 4em;
      height: 0.5em;
      background-color: #fff;
      border-radius: 0.5em;
    }
    .burguer-bar.clicked:nth-child(1) {
      transform: rotate(45deg) translate(-0.5em, 1.55em);
      transition: ease-out 0.5s;
    }
    .burguer-bar.clicked:nth-child(2) {
      transform: scale(0.1);
      transition: ease-out 0.5s;
    }
    .burguer-bar.clicked:nth-child(3) {
      transform: rotate(135deg) translate(-0.1em, 2.3em);
      transition: ease-out 0.5s;
    }
    .burger-bar.unclicked {
      transform: rotate(0) translate(0);
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
    }
  }
`;
export default function Sidebar({
  theme,
  setTheme,
  menuIsVinsible,
  setMenuVisible,
}) {
  //const [theme, setTheme] = useState('light');

  // button day/night

  const [isDarkMode, toggle] = useState(false);

  const [burguer_class, setburguerClass] = useState('burguer-bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!menuIsVinsible) {
      setburguerClass('burguer-bar clicked');
      setMenuClass('menu visible');
    } else {
      setburguerClass('burguer-bar unclicked');
      setMenuClass('menu hidden');
    }
    setMenuVisible(!menuIsVinsible);
  };

  /////////////////////

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
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Fragment>
        <div
          style={{
            width: '100%',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Ul>
            <ul
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                position: 'absolute',
                left: 0,
                width: '100%',
              }}
            >
              <MobileNightEsun style={{ textDecoration: 'none' }}>
                <ButtonChangeIcon toggleTheme={toggleTheme} />
              </MobileNightEsun>
              <li style={{ textDecoration: 'none' }}>
                <LinkList to={'/'}>
                  {theme === 'light' ? (
                    <img src={LogoBlack} width={50} alt='logo' />
                  ) : (
                    <img src={Logo} width={50} alt='logo' />
                  )}
                </LinkList>
              </li>
            </ul>
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '20px',
                width: '100%',
              }}
            >
              <li>
                <LinkList
                  to='about'
                  style={({ isActive }) => ({
                    color: isActive ? 'green' : 'blue',
                  })}
                >
                  About
                </LinkList>
              </li>
              <li>
                <LinkList
                  to='projects'
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'green' : 'white',
                  })}
                >
                  Projects
                </LinkList>
              </li>
              <li>
                <LinkList
                  to='resume'
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'green' : 'white',
                  })}
                >
                  Resume
                </LinkList>
              </li>
              <li>
                <LinkList
                  to='contact'
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'green' : 'white',
                  })}
                >
                  Contact
                </LinkList>
              </li>
              <Li>
                <BurguerMenu onClick={updateMenu}>
                  <Hamburger
                    toggled={menuIsVinsible}
                    toggle={setMenuVisible}
                    direction='left'
                  />
                </BurguerMenu>
              </Li>
              <ul style={{ zIndex: 100 }}>
                <Dark>
                  <ButtonChangeIcon toggleTheme={toggleTheme} />
                </Dark>
              </ul>
            </ul>
          </Ul>
          <div className={menu_class}></div>
        </div>
      </Fragment>
    </ThemeProvider>
  );
}
