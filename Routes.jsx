import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/Pages/Home';
import Projects from './src/Pages/Projects';
import Resume from './src/Pages/Resume';
import Contact from './src/Pages/Contact';
import About from './src/Pages/About';
import { ThemeProvider } from 'styled-components';
import GlobalTheme from './components/Globals';
import { lightTheme, darkTheme } from './components/theme';
import Sidebar from './components/Sidebar';

import SidebarMobile from './components/SidebarMobile';

export default function Routes1() {
  const [menuIsVinsible, setMenuVisible] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };
  {
    menuIsVinsible ? console.log('menuIsVinsible') : console.log('not visible');
  }
  useEffect(() => {
    document.body.style.overflowY = menuIsVinsible ? 'hidden' : 'auto';
  }, [menuIsVinsible]);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div></div>
      <Fragment>
        <GlobalTheme />

        <Router>
          <Sidebar
            theme={theme}
            setTheme={setTheme}
            menuIsVinsible={menuIsVinsible}
            setMenuVisible={setMenuVisible}
          />

          <SidebarMobile
            menuIsVinsible={menuIsVinsible}
            setMenuVisible={setMenuVisible}
            theme={theme}
            setTheme={setTheme}
          />
          <Routes>
            <Route>
              <Route
                path='/'
                element={<Home theme={theme} setTheme={setTheme} />}
              />
              <Route path='/projects' element={<Projects />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
            </Route>
          </Routes>
        </Router>
      </Fragment>
    </ThemeProvider>
  );
}
